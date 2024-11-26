import { Routes, Route } from "react-router-dom";
import Footer from "~containers/Footer";
import Navbar from "~containers/Navbar";
import Sidebar from "~containers/Sidebar";
import Home from "~pages/Home";
import NoPage from "~pages/NoPage";
import ProductDetails from "~pages/ProductDetails";
import ScrollToTop from "~components/ScrollToTop"; // Ajusta la ruta según la ubicación de tu componente

const App = () => {
  return (
    <div className="overflow-hidden">
      <ScrollToTop /> {/* Este componente asegura que el scroll vuelva al inicio */}
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
