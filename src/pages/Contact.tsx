import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const faqItems = [
    {
      question: "What are your business hours?",
      answer: "We're open Monday to Saturday, 8:00 AM to 6:00 PM. For emergency or urgent cleaning requests, please call us and we'll do our best to accommodate you.",
    },
    {
      question: "How quickly can you respond to a booking request?",
      answer: "We typically respond to all inquiries within 2-4 hours during business hours. For urgent requests, please call us directly for immediate assistance.",
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes! We provide free, no-obligation quotes for all our services. Simply fill out our contact form or call us with details about your cleaning needs.",
    },
    {
      question: "Can I change or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking up to 24 hours before the scheduled time without any charges. For changes within 24 hours, please contact us directly.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfers, and mobile payments. Payment is typically made after service completion, unless other arrangements are made for commercial contracts.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Have questions or ready to book? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-md border border-border">
              <div className="p-3 bg-accent rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+2348012345678"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +234 801 234 5678
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-md border border-border">
              <div className="p-3 bg-accent rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@gladyscleaning.ng"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@gladyscleaning.ng
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-md border border-border">
              <div className="p-3 bg-accent rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">
                Lagos, Nigeria
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-md border border-border">
              <div className="p-3 bg-accent rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon-Sat: 8AM - 6PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll respond within 24 hours
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to questions you may have
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
