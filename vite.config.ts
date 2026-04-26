import { defineConfig, loadEnv } from 'vite'
import path from 'path'
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
