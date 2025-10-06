import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Building2, Sparkles, TruckIcon, PartyPopper, Settings, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import servicesHeaderImg from "@/assets/services-header.jpg";
import residentialImg from "@/assets/residential-cleaning.jpg";
import commercialImg from "@/assets/commercial-cleaning.jpg";
import deepCleaningImg from "@/assets/deep-cleaning.jpg";
import moveCleaningImg from "@/assets/move-cleaning.jpg";
import eventCleaningImg from "@/assets/event-cleaning.jpg";
import customCleaningImg from "@/assets/custom-cleaning.jpg";

const Services = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [isDetailedBookingSubmitting, setIsDetailedBookingSubmitting] = useState(false);

  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including dusting, vacuuming, mopping, kitchen and bathroom sanitization, and more.",
      features: ["Regular maintenance cleaning", "One-time deep cleaning", "Flexible scheduling", "Eco-friendly products"],
      image: residentialImg,
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and business cleaning to maintain a pristine, productive workplace environment.",
      features: ["Daily or weekly cleaning", "After-hours service", "Customized plans", "Professional equipment"],
      image: commercialImg,
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Intensive, thorough cleaning that reaches every corner, perfect for spring cleaning or special occasions.",
      features: ["Detailed surface cleaning", "Hard-to-reach areas", "Appliance cleaning", "Complete sanitization"],
      image: deepCleaningImg,
    },
    {
      icon: TruckIcon,
      title: "Move-In/Out Cleaning",
      description: "Comprehensive cleaning for properties being vacated or newly occupied, ensuring a fresh start.",
      features: ["Empty property cleaning", "Cabinet & closet cleaning", "Window cleaning", "Ready for occupancy"],
      image: moveCleaningImg,
    },
    {
      icon: PartyPopper,
      title: "Post-Event Cleaning",
      description: "Quick and efficient cleanup after parties, gatherings, or corporate events of any size.",
      features: ["Rapid response", "Complete cleanup", "Waste disposal", "Furniture arrangement"],
      image: eventCleaningImg,
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Tailored cleaning plans designed specifically for your unique needs and schedule.",
      features: ["Personalized service", "Flexible options", "Special requests", "Ongoing support"],
      image: customCleaningImg,
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

  const handleDetailedBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDetailedBookingSubmitting(true);

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
          title: "Booking Request Sent!",
          description: "We'll contact you shortly to confirm your booking.",
        });
        e.currentTarget.reset();
        setIsBookingDialogOpen(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDetailedBookingSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header with Quick Booking */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHeaderImg} 
            alt="Professional Cleaning Equipment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white">
              Our Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/95">
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
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                detailed
                onBookClick={() => setIsBookingDialogOpen(true)}
              />
            ))}
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

      {/* Booking Dialog */}
      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
              Book Your Cleaning Service
            </DialogTitle>
            <p className="text-muted-foreground text-center">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </DialogHeader>

          <form onSubmit={handleDetailedBooking} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234 801 234 5678"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Type *</Label>
                <Select name="service" required>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    <SelectItem value="residential">Residential Cleaning</SelectItem>
                    <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                    <SelectItem value="deep">Deep Cleaning</SelectItem>
                    <SelectItem value="move">Move-In/Out Cleaning</SelectItem>
                    <SelectItem value="event">Post-Event Cleaning</SelectItem>
                    <SelectItem value="custom">Customized Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date *</Label>
                <div className="relative">
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="bg-background pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time *</Label>
                <div className="relative">
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="bg-background pl-10"
                  />
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Service Address *</Label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="123 Main Street, Lagos"
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Any specific requirements or questions..."
                rows={4}
                className="bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full shadow-lg"
              disabled={isDetailedBookingSubmitting}
            >
              {isDetailedBookingSubmitting ? "Sending..." : "Submit Booking Request"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              * Required fields. We respect your privacy and will never share your information.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
