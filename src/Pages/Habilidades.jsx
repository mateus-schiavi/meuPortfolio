// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 left-0 z-10">
      <ul className="flex justify-center space-x-8">
        <li><Link to="/" className="hover:text-gray-300">Início</Link></li>
        <li><Link to="/projetos" className="hover:text-gray-300">Projetos</Link></li>
        <li><Link to="/habilidades" className="hover:text-gray-300">Habilidades</Link></li>
        <li><Link to="/experiencias" className="hover:text-gray-300">Experiências</Link></li>
        <li><Link to="/contato" className="hover:text-gray-300">Contato</Link></li>
      </ul>
    </nav>
  );
}

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-900 text-white pt-20">
      <Navbar />
      
      <header className="text-center mb-10 px-6">
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
          Bem-vindo ao meu Portfólio
        </h1>
        <p className="mt-4 text-xl">
          Veja os meus projetos, habilidades e experiências.
        </p>
      </header>

      <section className="flex flex-col md:flex-row justify-center items-center w-full px-4">
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm mx-4 my-6">
          <h2 className="text-3xl font-semibold mb-4">Projetos</h2>
          <p className="text-lg">
            Explore meus projetos de desenvolvimento web, todos focados em qualidade e inovação.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm mx-4 my-6">
          <h2 className="text-3xl font-semibold mb-4">Habilidades</h2>
          <p className="text-lg">
            Tenho experiência prática em projetos envolvendo C#, React + Node.js, Javascript e Python.
          </p>
        </div>
        
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm mx-4 my-6">
          <h2 className="text-3xl font-semibold mb-4">Experiência</h2>
          <p className="text-lg">
            Ao longo da minha carreira, trabalhei com diversas empresas para entregar soluções inovadoras.
          </p>
        </div>
      </section>

      <footer className="w-full text-center py-6 mt-12 bg-gray-800">
        <p className="text-lg text-white">
          Entre em contato para mais informações sobre como posso ajudar no seu próximo projeto.
        </p>
      </footer>
    </div>
  );
};

export default Home;
