import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tailoring from './pages/Tailoring';
import CategoryPage from './pages/CategoryPage';
import Collections from './pages/Collections';
import Pricing from './pages/Pricing';
import Explore from './pages/Explore';
import BookingGuide from './pages/BookingGuide';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
// NOTE: OrderJourney is intentionally commented out for now.
// We've replaced the multi-step wizard with a lightweight callback-request
// flow (RequestContact) plus a Cart that groups multiple designs into a
// single parent order. Do NOT delete OrderJourney — we'll bring it back
// once the team is ready to handle full self-serve ordering.
// import OrderJourney from './pages/OrderJourney';
import RequestContact from './pages/RequestContact';
import Cart from './pages/Cart';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import PreFooterBooking from './components/PreFooterBooking';
import AdminApp from './admin/AdminApp';
import { AuthProvider } from './contexts/AuthContext';
import { CATEGORY_TO_SCHEMA } from './data/measurements';
import { Toaster } from './components/ui/sonner';
// import  BookingSection from './components/booking-section';

function TailoringRouter() {
  const loc = useLocation();
  const slug = loc.pathname.split('/').filter(Boolean)[1];
  if (slug && CATEGORY_TO_SCHEMA[slug]) return <CategoryPage slug={slug}/>;
  return <Tailoring/>;
}

function isAdminPath(path) { return path.startsWith('/admin'); }

function HideOnAuth({ children }) {
  const loc = useLocation();
  if (
    loc.pathname.startsWith('/login') ||
    loc.pathname.startsWith('/profile') ||
    loc.pathname.startsWith('/cart') ||
    loc.pathname.includes('/order/') ||
    isAdminPath(loc.pathname)
  ) return null;
  return children;
}

function HideOnAdmin({ children }) {
  const loc = useLocation();
  if (isAdminPath(loc.pathname)) return null;
  return children;
}

function Chrome() {
  return <HideOnAdmin><Header /></HideOnAdmin>;
}

function FooterChrome() {
  return <HideOnAdmin><Footer /></HideOnAdmin>;
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Chrome />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tailoring" element={<Tailoring />} />
            <Route path="/tailoring/:slug" element={<TailoringRouter />} />
            {/* OrderJourney route is paused — routed to RequestContact instead.
                Original route kept as comment so we can restore it later:
                <Route path="/tailoring/:slug/order/:design" element={<OrderJourney />} /> */}
            <Route path="/tailoring/:slug/order/:design" element={<RequestContact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:slug" element={<Collections />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/:slug" element={<Pricing />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:slug" element={<Explore />} />
            <Route path="/booking" element={<BookingGuide />} />
            <Route path="/booking/:slug" element={<BookingGuide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:slug" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/*" element={<AdminApp />} />
          </Routes>
          <HideOnAuth><PreFooterBooking /></HideOnAuth>
          <FooterChrome />
          <HideOnAdmin><FloatingActions /></HideOnAdmin>
          <Toaster position="bottom-right" />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
