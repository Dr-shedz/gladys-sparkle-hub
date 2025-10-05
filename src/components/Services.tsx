import { Home, Building2, Sparkles, TruckIcon, PartyPopper, Settings } from "lucide-react";
import ServiceCard from "./ServiceCard";
import residentialImg from "@/assets/residential-cleaning.jpg";
import commercialImg from "@/assets/commercial-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";
import eventCleaningImg from "@/assets/event-cleaning.jpg";
import customCleaningImg from "@/assets/custom-cleaning.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Keep your home fresh, clean, and comfortable with our professional residential cleaning services.",
      image: residentialImg,
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Maintain a spotless and professional workspace that impresses clients and boosts productivity.",
      image: commercialImg,
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough, detailed cleaning that reaches every corner and leaves your space immaculate.",
      image: deepCleaningImg,
    },
    {
      icon: TruckIcon,
      title: "Move-In/Out Cleaning",
      description: "Make moving stress-free with our comprehensive cleaning for new or vacated properties.",
      image: moveCleaningImg,
    },
    {
      icon: PartyPopper,
      title: "Post-Event Cleaning",
      description: "Quick and efficient cleanup after your events, parties, or gatherings of any size.",
      image: eventCleaningImg,
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Tailored cleaning plans designed to meet your specific needs and schedule.",
      image: customCleaningImg,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your needs, delivered with excellence and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={[]}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
