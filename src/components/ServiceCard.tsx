import { Button } from "@/components/ui/button";
import { CheckCircle2, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
  detailed?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, features, image, detailed = false }: ServiceCardProps) => {
  if (detailed) {
    return (
      <div className="max-w-5xl mx-auto bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-hero rounded-lg flex-shrink-0">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-0 md:ml-16 mb-4">
              {features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <img 
              src={image} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:bg-gradient-to-l md:from-card md:to-transparent" />
            <div className="absolute bottom-6 right-6">
              <Button size="lg" className="shadow-lg">
                Book This Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-card rounded-xl border border-border shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-md">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <Link to="/services">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
