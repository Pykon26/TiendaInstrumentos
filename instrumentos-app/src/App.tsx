import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import DondeEstamosPage from './pages/DondeEstamosPage';
import DetalleInstrumentoPage from './pages/DetalleInstrumentoPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';
import GestionUsuariosPage from './pages/GestionUsuariosPage';
import AccesoDenegadoPage from './pages/AccesoDenegadoPage';
import MisPedidosPage from './pages/MisPedidosPage';
import GestionPedidosPage from './pages/GestionPedidosPage';

import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import CarritoDrawer from './components/carrito/CarritoDrawer';
import { UserRol } from './types/auth';
import './App.css';
import './components/carrito/Carrito.css';
import './pages/AdminStyles.css';

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                {/* Rutas publicas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/productos" element={<ProductosPage />} />
                <Route path="/donde-estamos" element={<DondeEstamosPage />} />
                <Route path="/instrumento/:id" element={<DetalleInstrumentoPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegistroPage />} />
                <Route path="/acceso-denegado" element={<AccesoDenegadoPage />} />

                {/* Rutas protegidas para ADMIN */}
                <Route element={<ProtectedRoute allowedRoles={[UserRol.ADMIN]} />}>
                  <Route path="/gestion-usuarios" element={<GestionUsuariosPage />} />
                  <Route path="/gestion-pedidos" element={<GestionPedidosPage />} />
                </Route>

                {/* Rutas protegidas para ADMIN y OPERADOR */}
                <Route element={<ProtectedRoute allowedRoles={[UserRol.ADMIN, UserRol.OPERADOR]} />}>
                  <Route path="/admin" element={<AdminPage />} />
                </Route>

                {/* Rutas protegidas para cualquier usuario autenticado */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/mis-pedidos" element={<MisPedidosPage />} />
                </Route>
              </Routes>
            </main>
            <Footer />
            {/* Componente del Carrito */}
            <CarritoDrawer />
          </div>
        </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;