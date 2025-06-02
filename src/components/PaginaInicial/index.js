import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function PaginaInicialdoSite (){
    const navigate = useNavigate(); // Hook para navegação

    const irParaCadastro = () => {
        navigate('/formulario-cadastro'); // Redireciona para a rota do formulário
    };

    return (
        <div className="container">
            <img src={logo} alt="Logo página inicial"/>
            <h1>Bem-vindo(a) ao Esporte Clube Bahia!</h1>
            <button 
                onClick={irParaCadastro} 
            >
                Clique aqui para se cadastrar
            </button>
        </div>
    );
};

export default PaginaInicialdoSite;