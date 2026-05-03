import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import fs from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    devContactApi(),
    customizeManifestWatcher(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})

function devContactApi() {
  return {
    name: 'dev-contact-api',
    configureServer(server: any) {
      server.middlewares.use('/api/contact', async (req: any, res: any) => {
        try {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }))
            return
          }

          const contentType = String(req.headers['content-type'] || '')
          if (!contentType.includes('application/json')) {
            res.statusCode = 415
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: 'Expected application/json' }))
            return
          }

          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(Buffer.from(chunk))
          const raw = Buffer.concat(chunks).toString('utf8') || '{}'
          req.body = JSON.parse(raw)

          const mod = await import(new URL('./api/contact.js', import.meta.url).href)
          const handler = mod.default
          await handler(req, res)
        } catch (err: any) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: false, error: err?.message || 'Server error' }))
        }
      })
    },
  }
}

function customizeManifestWatcher() {
  const customizeDir = path.resolve(__dirname, 'public', 'customize')
  const manifestFile = path.join(customizeDir, 'manifest.json')
  const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'])

  const encodePathSegmentPreservingSlashes = (input: string) =>
    input
      .split('/')
      .map((segment) => encodeURIComponent(segment))
      .join('/')

  const writeManifest = () => {
    if (!fs.existsSync(customizeDir)) return

    const items = fs
      .readdirSync(customizeDir, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => allowedExtensions.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))

    const images = items.map((name) => encodePathSegmentPreservingSlashes(`/customize/${name}`))

    fs.writeFileSync(
      manifestFile,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          count: images.length,
          images,
        },
        null,
        2,
      ) + '\n',
      'utf8',
    )
  }

  return {
    name: 'customize-manifest-watcher',
    configureServer(server: any) {
      writeManifest()
      server.watcher.add(customizeDir)

      const syncManifest = (file: string) => {
        if (!file.startsWith(customizeDir)) return
        if (path.basename(file) === 'manifest.json') return

        writeManifest()
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.on('add', syncManifest)
      server.watcher.on('unlink', syncManifest)
      server.watcher.on('change', syncManifest)
    },
  }
}
