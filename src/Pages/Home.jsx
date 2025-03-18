import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll into view
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link to="#home" className="hover:text-gray-300">
          Portfolio do Mateus
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <NavItem to="#home" label="Início" onClick={() => handleScrollToSection('home')} />
          <NavItem to="#projetos" label="Projetos" onClick={() => handleScrollToSection('projetos')} />
          <NavItem to="#habilidades" label="Habilidades" onClick={() => handleScrollToSection('habilidades')} />
          <NavItem to="#experiencias" label="Experiências" onClick={() => handleScrollToSection('experiencias')} />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-700 py-4">
          <NavItem to="#home" label="Início" onClick={() => handleScrollToSection('home')} />
          <NavItem to="#projetos" label="Projetos" onClick={() => handleScrollToSection('projetos')} />
          <NavItem to="#habilidades" label="Habilidades" onClick={() => handleScrollToSection('habilidades')} />
          <NavItem to="#experiencias" label="Experiências" onClick={() => handleScrollToSection('experiencias')} />
        </div>
      )}
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({ to, label, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="hover:text-gray-300 transition-colors"
      >
        {label}
      </button>
    </li>
  );
};

// Section Component
const Section = ({ id, title, subtitle, children, bgColor }) => {
  return (
    <section id={id} className={`py-20 ${bgColor} text-center`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">{title}</h2>
        <p className="text-xl mb-8 text-gray-700">{subtitle}</p>
        {children}
      </div>
    </section>
  );
};

// Card Component
const Card = ({ title, description }) => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-sm mx-4 my-6">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

// Contact Form Component (placeholder)

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20">
      <Navbar />

      {/* Seção Projetos */}
      <Section id="projetos" title="Projetos" subtitle="Explore meus projetos de desenvolvimento web, todos focados em qualidade e inovação." bgColor="bg-white">
        <div className="flex flex-wrap justify-center gap-6">
          <Card title="Cadê meu Caixa" description="Projeto feito em Python com a finalidade de auxiliar na organização financeira pessoal e empresarial" />
          <Card title="StockMaster" description="Projeto feito em React + Node.js com a finalidade de prover um melhor controle e gerenciamento de estoque de loja e/ou indústrias" />
          <Card title="Monitoramento de Batimentos Cardíacos" description="Desenvolvimento de um sistema portátil baseado em sensores flexíveis para monitoramento dos batimentos cardíacos com uso de IoT. (projeto em andamento)" />
        </div>
      </Section>

      {/* Seção Habilidades */}
      <Section id="habilidades" title="Habilidades" subtitle="Tenho prática com tecnologia como React.js, Node.js, Python, e muito mais." bgColor="bg-gray-100">
        <div className="flex flex-wrap justify-center gap-6">
          <Card title="React.js" description="Desenvolvimento de interfaces dinâmicas e interativas." />
          <Card title="Node.js" description="Construção de backends eficientes e escaláveis." />
          <Card title="Python" description="Criação de programas que utilizam banco de dados e análise de dados" />
        </div>
      </Section>

      {/* Seção Experiência */}
      <Section id="experiencias" title="Experiência" subtitle="Aqui estão alguns dos meus projetos e trabalhos que me ajudaram a crescer como desenvolvedor e profissional." bgColor="bg-white">
        <div className="flex flex-wrap justify-center gap-6">
          <Card
            title="English Language Teacher - Aliança"
            description="Auxiliei no ensino de inglês para pessoas de todas as idades. Trabalhei em atividades de ensino de inglês como segunda língua (ESL), focando em promover a comunicação eficaz e a compreensão cultural."
            details="Fev de 2023 - Ago de 2024 (1 ano 7 meses) | São Paulo, Brasil"
            skills="Ensino de Inglês como Segunda Língua · Resolução de problemas · Comunicação"
          />
          <Card
            title="IT Teacher - Mais1Code"
            description="Auxiliei no ensino de informática básica para crianças e adolescentes, ajudando-os a desenvolver habilidades essenciais para o uso de tecnologias e resolução de problemas de hardware."
            details="Out de 2022 - Dez de 2022 (3 meses) | São Paulo, Brasil"
            skills="Informática · Solução de problemas de hardware · Ensino"
          />
          <Card
            title="Projeto Pessoal: Portfólio Web"
            description="Criei um portfólio interativo para mostrar meus projetos e habilidades. Utilizei React.js e TailwindCSS para criar uma experiência dinâmica e responsiva."
          />
        </div>
      </Section>

      {/* Rodapé */}
      <footer className="w-full text-center py-6 mt-12 bg-gray-800">
        <p className="text-lg text-white">
          © 2025 Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
