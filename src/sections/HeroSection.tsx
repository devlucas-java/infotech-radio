import { ArrowRight, Globe, Monitor, Shield, Smartphone, Users, Wifi, Zap } from "lucide-react";

// Hero Section Component
export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-red-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Internet de <span className="text-red-600">Alta Velocidade</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Conecte-se ao futuro com a Info-Tech. Oferecemos internet ultra-rápida, 
              estável e com o melhor custo-benefício da região.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Zap className="text-red-600" size={24} />
                <span className="text-lg">Velocidade até 1GB</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-red-600" size={24} />
                <span className="text-lg">Conexão estável 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-red-600" size={24} />
                <span className="text-lg">Suporte técnico especializado</span>
              </div>
            </div>
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg flex items-center space-x-2">
              <span>Contrate Agora</span>
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Wifi className="mx-auto text-red-600 mb-2" size={48} />
                    <h3 className="font-bold text-gray-800">Wi-Fi Gratuito</h3>
                  </div>
                  <div className="text-center">
                    <Globe className="mx-auto text-red-600 mb-2" size={48} />
                    <h3 className="font-bold text-gray-800">Cobertura Total</h3>
                  </div>
                  <div className="text-center">
                    <Smartphone className="mx-auto text-red-600 mb-2" size={48} />
                    <h3 className="font-bold text-gray-800">App Mobile</h3>
                  </div>
                  <div className="text-center">
                    <Monitor className="mx-auto text-red-600 mb-2" size={48} />
                    <h3 className="font-bold text-gray-800">Múltiplos Dispositivos</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
