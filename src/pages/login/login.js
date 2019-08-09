import React from 'react';
import './login.css';

import logo from '../../assets/logo.svg';

export default function login() {
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="logoLogin" />
                <input placeholder="Digite seu usuario do GitHub" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

 