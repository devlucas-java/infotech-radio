import { Star } from "lucide-react";
import { plans, whatsappNumber } from "../config";

export const PlansSection: React.FC = () => {

  const handleWhatsAppRedirect = (planName: string) => {
    const message = encodeURIComponent(`👋 Olá! Vim do seu site e estou interessado no plano *${planName}*. Quero mais informações! 💻📶`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Planos de Internet</h2>
          <p className="text-xl text-gray-600">Escolha o plano ideal para suas necessidades</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${plan.popular ? 'ring-4 ring-red-600 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">
                {plan.price}
                <span className="text-lg text-gray-600">/mês</span>
              </div>
              <div className="text-xl text-gray-600 mb-6">{plan.speed}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Star className="text-red-600" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                onClick={() => handleWhatsAppRedirect(plan.name)}
              >
                Contratar Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
