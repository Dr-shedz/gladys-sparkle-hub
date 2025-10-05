import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";

const Index = () => {
  const faqItems = [
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Lagos and surrounding areas in Nigeria. For locations outside Lagos, please contact us to discuss availability.",
    },
    {
      question: "How do I book a cleaning service?",
      answer: "You can book through our online booking form, call us directly, or send us an email. We'll confirm your appointment within 24 hours.",
    },
    {
      question: "Are your cleaning products safe?",
      answer: "Yes! We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Your satisfaction is our priority. If you're not completely happy, contact us within 24 hours and we'll make it right at no additional cost.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "It's not necessary. Many of our clients provide access and go about their day. We're fully insured and our team is thoroughly vetted.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Gladys Cleaning Agency
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded by Gladys, a dedicated entrepreneur with a passion for excellence, 
              Gladys Cleaning Agency has been transforming spaces across Lagos for over 8 years. 
              Our mission is to provide high-quality and reliable cleaning services that improve 
              the well-being of individuals, families, and businesses.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the power of a clean environment to enhance productivity, health, and happiness. 
              With our core values of excellence, integrity, reliability, and hard work, we're committed 
              to becoming the most trusted cleaning service provider in Lagos and beyond.
            </p>
          </div>
        </div>
      </section>

      <Stats />
      <Services />
      <Testimonials />
      <BookingForm />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
