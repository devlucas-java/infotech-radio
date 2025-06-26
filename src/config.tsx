import { Globe, Monitor, Wifi } from "lucide-react";


  export const plans = [
    {
      name: "Básico",
      speed: "50MB",
      price: "R$ 49,90",
      features: ["Download: 50 Mbps", "Upload: 25 Mbps", "Wi-Fi Grátis", "Suporte Básico"]
    },
    {
      name: "Premium",
      speed: "200MB",
      price: "R$ 79,90",
      features: ["Download: 200 Mbps", "Upload: 100 Mbps", "Wi-Fi Grátis", "Suporte Prioritário"],
      popular: true
    },
    {
      name: "Ultra",
      speed: "500MB",
      price: "R$ 129,90",
      features: ["Download: 500 Mbps", "Upload: 250 Mbps", "Wi-Fi 6 Grátis", "Suporte VIP"]
    }
  ];


  export const services = [
    {
      icon: <Wifi size={48} />,
      title: "Internet Residencial",
      description: "Planos de internet residencial com velocidades de 50MB a 1GB, perfeitos para toda a família."
    },
    {
      icon: <Globe size={48} />,
      title: "Internet Empresarial",
      description: "Soluções corporativas com IP fixo, suporte 24/7 e garantia de uptime para seu negócio."
    },
    {
      icon: <Monitor size={48} />,
      title: "Fibra Óptica",
      description: "Tecnologia de ponta com fibra óptica até sua casa, garantindo máxima velocidade e estabilidade."
    }
  ];