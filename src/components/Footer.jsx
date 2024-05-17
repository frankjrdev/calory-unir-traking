import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] w-full py-4">
      <hr className="hidden md:block border-gray-200 border-t-2 py-2 container mx-auto" />

      <div className=" text-black mt-8 p-4 flex justify-between items-center container mx-auto">
        <div>
          <p>Copyright ©2024 Creado por Francisco Quintero</p>
        </div>

        <div className="flex items-center">
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li>
                <Link to="/recipes">Recetas</Link>
              </li>
              <li>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Empezar Gratis
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
