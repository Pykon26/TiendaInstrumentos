import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
import { useAuth } from '../../context/AuthContext';
import CarritoItem from './CarritoItem';
import Loading from '../common/Loading';

const CarritoDrawer: React.FC = () => {
    const {
        items,
        mostrarCarrito,
        mensajePedido,
        loading,
        error,
        totalItems,
        totalPrecio,
        toggleCarrito,
        vaciarCarrito,
        guardarPedido,
        limpiarMensaje
    } = useCarritoContext();

    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    if (!mostrarCarrito) return null;

    const handleGuardarPedido = async () => {
        try {
            //verifica si el usuario esta autenticado
            if (!isAuthenticated) {
                //redirige al login
                toggleCarrito();
                navigate('/login');
                return;
            }

            await guardarPedido();
        } catch (err) {
            console.error('Error al guardar el pedido:', err);
        }
    };

    const handleLoginClick = () => {
        toggleCarrito();
        navigate('/login');
    };

    const handleRegistroClick = () => {
        toggleCarrito();
        navigate('/registro');
    };

    return (
        <div className="carrito-drawer-container">
            <div className="carrito-drawer-overlay" onClick={toggleCarrito}></div>

            <div className="carrito-drawer">
                <div className="carrito-header">
                    <h2>Carrito de Compras</h2>
                    <button className="close-btn" onClick={toggleCarrito}>×</button>
                </div>

                {/* Mensaje de exito al guardar pedido */}
                {mensajePedido && (
                    <div className="mensaje-exito">
                        <p>{mensajePedido}</p>
                        <button onClick={limpiarMensaje} className="btn-cerrar-mensaje">
                            Cerrar
                        </button>
                    </div>
                )}

                {/* Mensaje de error */}
                {error && (
                    <div className="mensaje-error">
                        <p>{error}</p>
                    </div>
                )}

                {/* Mostrar spinner cuando este cargando */}
                {loading && <Loading message="Procesando pedido..." />}

                {/* Lista de items */}
                {!loading && items.length === 0 && !mensajePedido && (
                    <div className="carrito-vacio">
                        <p>No hay productos en el carrito</p>
                    </div>
                )}

                {!loading && items.length > 0 && (
                    <>
                        <div className="carrito-items">
                            {items.map(item => (
                                <CarritoItem key={item.instrumento.idInstrumento} item={item} />
                            ))}
                        </div>

                        <div className="carrito-summary">
                            <p className="total-items">Total: ({totalItems} {totalItems === 1 ? 'ítem' : 'ítems'})</p>
                            <p className="total-price">${totalPrecio.toLocaleString()}</p>
                        </div>

                        <div className="carrito-actions">
                            <button
                                className="btn-vaciar"
                                onClick={vaciarCarrito}
                                disabled={loading}
                            >
                                Vaciar carrito
                            </button>

                            <button
                                className="btn-guardar"
                                onClick={handleGuardarPedido}
                                disabled={loading}
                            >
                                {isAuthenticated ? 'Guardar Pedido' : 'Realizar Pedido'}
                            </button>
                        </div>

                        {/* Mensaje para usuarios no autenticados */}
                        {!isAuthenticated && (
                            <div className="auth-message">
                                <p>Para realizar el pedido debes iniciar sesión o registrarte</p>
                                <div className="auth-buttons">
                                    <button
                                        className="btn-auth login"
                                        onClick={handleLoginClick}
                                    >
                                        Iniciar Sesión
                                    </button>
                                    <button
                                        className="btn-auth register"
                                        onClick={handleRegistroClick}
                                    >
                                        Registrarse
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CarritoDrawer;

//Panel deslizable que muestra el contenido del carrito.