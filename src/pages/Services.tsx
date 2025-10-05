import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, Building2, Sparkles, TruckIcon, PartyPopper, Settings, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including dusting, vacuuming, mopping, kitchen and bathroom sanitization, and more.",
      features: ["Regular maintenance cleaning", "One-time deep cleaning", "Flexible scheduling", "Eco-friendly products"],
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and business cleaning to maintain a pristine, productive workplace environment.",
      features: ["Daily or weekly cleaning", "After-hours service", "Customized plans", "Professional equipment"],
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Intensive, thorough cleaning that reaches every corner, perfect for spring cleaning or special occasions.",
      features: ["Detailed surface cleaning", "Hard-to-reach areas", "Appliance cleaning", "Complete sanitization"],
    },
    {
      icon: TruckIcon,
      title: "Move-In/Out Cleaning",
      description: "Comprehensive cleaning for properties being vacated or newly occupied, ensuring a fresh start.",
      features: ["Empty property cleaning", "Cabinet & closet cleaning", "Window cleaning", "Ready for occupancy"],
    },
    {
      icon: PartyPopper,
      title: "Post-Event Cleaning",
      description: "Quick and efficient cleanup after parties, gatherings, or corporate events of any size.",
      features: ["Rapid response", "Complete cleanup", "Waste disposal", "Furniture arrangement"],
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Tailored cleaning plans designed specifically for your unique needs and schedule.",
      features: ["Personalized service", "Flexible options", "Special requests", "Ongoing support"],
    },
  ];

  const faqItems = [
    {
      question: "How much do your services cost?",
      answer: "Pricing varies based on the type of service, size of the space, and frequency. Contact us for a free, personalized quote tailored to your needs.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 48 hours in advance for regular services. For same-day or urgent requests, please call us directly and we'll do our best to accommodate you.",
    },
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer: "Yes! We bring all necessary cleaning supplies, equipment, and eco-friendly products. If you prefer us to use your specific products, just let us know.",
    },
    {
      question: "Are your cleaners insured and background-checked?",
      answer: "Absolutely. All our team members are fully insured, bonded, and undergo thorough background checks to ensure your safety and peace of mind.",
    },
    {
      question: "Can I schedule recurring cleaning services?",
      answer: "Yes! We offer daily, weekly, bi-weekly, and monthly cleaning schedules. Recurring customers often receive special rates and priority booking.",
    },
  ];

  const handleQuickBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Quick Booking Sent!",
          description: "We'll contact you shortly to confirm the details.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header with Quick Booking */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Professional cleaning solutions for every need
            </p>
          </div>

          {/* Quick Booking Form */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Quick Booking</h3>
            <form onSubmit={handleQuickBooking} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quick-name" className="text-white">Name</Label>
                  <Input
                    id="quick-name"
                    name="name"
                    type="text"
                    required
                    className="bg-white/90 text-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="quick-phone" className="text-white">Phone</Label>
                  <Input
                    id="quick-phone"
                    name="phone"
                    type="tel"
                    required
                    className="bg-white/90 text-foreground"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="quick-service" className="text-white">Service</Label>
                <Select name="service" required>
                  <SelectTrigger className="bg-white/90 text-foreground">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Cleaning</SelectItem>
                    <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                    <SelectItem value="deep">Deep Cleaning</SelectItem>
                    <SelectItem value="move">Move-In/Out</SelectItem>
                    <SelectItem value="event">Post-Event</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="max-w-5xl mx-auto bg-card rounded-xl shadow-lg border border-border p-6 md:p-8 hover:shadow-xl transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-hero rounded-lg flex-shrink-0">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-0 md:ml-16">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <Button size="lg" className="w-full md:w-auto shadow-md">
                        Book This Service
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scrolling Brand Text */}
      <section className="py-8 bg-gradient-hero overflow-hidden">
        <div className="flex whitespace-nowrap animate-slide-in">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-4xl md:text-5xl font-bold text-white/20 mx-8"
            >
              GLADYS CLEANING AGENCY
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service Questions?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our cleaning services
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
