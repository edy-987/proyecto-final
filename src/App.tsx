import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MainHeader from "./components/MainHeader/MainHeader";
import MenuBar from "./components/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import DestacadosPage from "./pages/DestacadosPage";
import NuevosPage from "./pages/NuevosPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <>
      <Header />
      <MainHeader />
      <MenuBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destacados" element={<DestacadosPage />} />
        <Route path="/nuevos" element={<NuevosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
