import { Facebook, Instagram, Twitter } from "lucide-react";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">INFO-TECH</h3>
                <p className="text-gray-400 text-sm">Provedor de Internet</p>
              </div>
            </div>
            <p className="text-gray-400">Conectando você ao futuro digital com tecnologia de ponta e atendimento excepcional.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Internet Residencial</li>
              <li>Internet Empresarial</li>
              <li>Fibra Óptica</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Planos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Básico 50MB</li>
              <li>Premium 200MB</li>
              <li>Ultra 500MB</li>
              <li>Empresarial</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={24} />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={24} />
              <Twitter className="text-gray-400 hover:text-white cursor-pointer" size={24} />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Info-Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
