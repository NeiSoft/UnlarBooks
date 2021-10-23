import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo">UnlarBooks</h1>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/books">Libros</Link>
                    </li>
                    <li>
                        <Link to="/cart">Carritos</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Pago</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
