import { Mail, MapPin, Phone } from "lucide-react";
import { email1, email2, endereco, number1, number2, rua } from "../config";


export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600">Estamos prontos para atender você</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Telefone</h3>
            <p className="text-gray-600">{number1}</p>
            <p className="text-gray-600">{number2}</p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">E-mail</h3>
            <p className="text-gray-600">{email1}</p>
            <p className="text-gray-600">{email2}</p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Endereço</h3>
            <p className="text-gray-600">{rua}</p>
            <p className="text-gray-600">{endereco}</p>
          </div>
        </div>
      </div>
    </section>
  );
};