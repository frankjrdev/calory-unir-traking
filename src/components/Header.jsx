import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/unir.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-black p-4 flex justify-between items-center px-16">
      <div className="flex items-center">
        <Link to="/" className="mr-4">
          <img src={Logo} alt="Logo" className="h-16" />
        </Link>
      </div>

      <div className="flex items-center">
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/recipes">Recetas</Link>
            </li>
            <li>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                <Link to="/traking">Empezar Gratis</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <button className="md:hidden" onClick={toggleMenu}>
        <FiMenu className="text-2xl" />
      </button>
      {/* Menú desplegable para dispositivos móviles */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 text-white p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/recipes">Recetas</Link>
            </li>
            <li>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Empezar Gratis
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
