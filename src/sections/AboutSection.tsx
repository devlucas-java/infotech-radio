import { Clock, Shield, Users, Zap } from "lucide-react";


export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre a Info-Tech</h2>
            <p className="text-lg text-gray-600 mb-6">
              Há mais de 10 anos no mercado, a Info-Tech é referência em provedores de internet na região. 
              Nossa missão é conectar pessoas e empresas com tecnologia de qualidade e atendimento excepcional.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">5000+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-gray-600">Suporte Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">99%</div>
                <div className="text-gray-600">Uptime Garantido</div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Por que escolher a Info-Tech?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Clock size={20} />
                  <span>Instalação rápida em até 24h</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield size={20} />
                  <span>Conexão estável e segura</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users size={20} />
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap size={20} />
                  <span>Tecnologia de ponta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
