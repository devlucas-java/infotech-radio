import { Menu, X } from "lucide-react";
import { useState } from "react";


export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="  items-center space-x-3">
            <div className="w-12 h-1 rounded-full flex items-center justify-center">
                <img
                  src="icon.png"
                  alt="Logo Infotech"
                  className=" h-35 left-7 -top-11 w-35 absolute object-contain"
                />
            </div>

            <div className="absolute top-0 left-25">
              <h1 className="text-2xl font-bold">INFO-TECH</h1>
              <p className="text-red-100 text-sm">Provedor de Internet</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-200 transition-colors">Início</a>
            <a href="#services" className="hover:text-red-200 transition-colors">Serviços</a>
            <a href="#plans" className="hover:text-red-200 transition-colors">Planos</a>
            <a href="#about" className="hover:text-red-200 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-red-200 transition-colors">Contato</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="hover:text-red-200 transition-colors py-2">Início</a>
              <a href="#services" className="hover:text-red-200 transition-colors py-2">Serviços</a>
              <a href="#plans" className="hover:text-red-200 transition-colors py-2">Planos</a>
              <a href="#about" className="hover:text-red-200 transition-colors py-2">Sobre</a>
              <a href="#contact" className="hover:text-red-200 transition-colors py-2">Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
