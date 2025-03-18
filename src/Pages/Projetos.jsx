// src/Projetos.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Projetos() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-900 text-white p-10 pt-24">
      {/* Barra de Navegação */}
      <nav className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 left-0 z-10">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300 font-semibold">
              Início
            </Link>
          </li>
          <li>
            <Link to="/projetos" className="hover:text-gray-300 font-semibold">
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/habilidades" className="hover:text-gray-300 font-semibold">
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="/experiencias" className="hover:text-gray-300 font-semibold">
              Experiências
            </Link>
          </li>
          <li>
            <Link to="/contato" className="hover:text-gray-300 font-semibold">
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      {/* Conteúdo da Página de Projetos */}
      <header className="text-center mb-10 px-6">
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
          Meus Projetos
        </h1>
        <p className="mt-4 text-xl">
          Aqui estão alguns dos projetos que desenvolvi, cada um com foco em inovação e qualidade.
        </p>
      </header>

      <section className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-3xl font-semibold mb-4">Projeto 1</h2>
          <p className="text-lg mb-4">
            Um projeto incrível que resolve problemas complexos com uma abordagem elegante.
          </p>
          <Link
            to="/projeto1"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Ver mais
          </Link>
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-3xl font-semibold mb-4">Projeto 2</h2>
          <p className="text-lg mb-4">
            Outro projeto voltado para eficiência e desempenho, com soluções modernas.
          </p>
          <Link
            to="/projeto2"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Ver mais
          </Link>
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-3xl font-semibold mb-4">Projeto 3</h2>
          <p className="text-lg mb-4">
            Este projeto combina tecnologia de ponta com uma interface amigável.
          </p>
          <Link
            to="/projeto3"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Ver mais
          </Link>
        </div>
      </section>

      <footer className="w-full text-center py-6 mt-12 bg-gray-800">
        <p className="text-lg text-white">
          Quer saber mais sobre os meus projetos? Entre em contato e ficarei feliz em compartilhar mais detalhes.
        </p>
        <button className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
          Fale Comigo
        </button>
      </footer>
    </div>
  );
}

export default Projetos;
