
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Inicio from "./pages/Inicio/";
import Equipos from "./pages/Equipos";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import Resultado from "./pages/Resultados";
const {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} = require("react-router-dom");

const AppContent = () => {
  const location = useLocation();
  // const isHomePage = location.pathname === "/";

  return (
    < div className="contenedor">
      <Cabecera/>
     
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="servicios" element={<Servicios/>} />
        <Route path="productos" element={<Productos/>} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="equipo" element={<Equipos/>} />
        <Route path="resultados" element={<Resultado/>} />
      </Routes>
      <WhatsAppButton numero="59171702505" />
      <Footer />
    </div>
  );
};

function AppRoutes(){
    return (
        <BrowserRouter>
            <AppContent/>
        </BrowserRouter>
    )
}

export default AppRoutes;
