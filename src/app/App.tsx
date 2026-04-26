import { BrowserRouter, Route, Routes } from 'react-router';
import { SiteLayout } from './layouts/SiteLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FranchisePage } from './pages/FranchisePage';
import { ProductsPage } from './pages/ProductsPage';
import { StoreLocatorPage } from './pages/StoreLocatorPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/store-locator" element={<StoreLocatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
