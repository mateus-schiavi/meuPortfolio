import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
            <li><Link to="/">Início</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/habilidades">Habilidades</Link></li>
                <li><Link to="/experiencias">Experiências</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;