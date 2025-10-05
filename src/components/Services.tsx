import { Home, Building2, Sparkles, TruckIcon, PartyPopper, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Keep your home fresh, clean, and comfortable with our professional residential cleaning services.",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Maintain a spotless and professional workspace that impresses clients and boosts productivity.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough, detailed cleaning that reaches every corner and leaves your space immaculate.",
    },
    {
      icon: TruckIcon,
      title: "Move-In/Out Cleaning",
      description: "Make moving stress-free with our comprehensive cleaning for new or vacated properties.",
    },
    {
      icon: PartyPopper,
      title: "Post-Event Cleaning",
      description: "Quick and efficient cleanup after your events, parties, or gatherings of any size.",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Tailored cleaning plans designed to meet your specific needs and schedule.",
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent rounded-lg group-hover:bg-gradient-hero transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Link to="/services">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    Book Now
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
