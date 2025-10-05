import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import { Target, Eye, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver outstanding quality in every service, exceeding expectations with meticulous attention to detail.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honesty and transparency guide everything we do. We build trust through consistent, ethical practices.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Count on us to show up on time, every time, delivering consistent results you can depend on.",
    },
    {
      icon: Eye,
      title: "Hard Work",
      description: "We believe in the value of dedication and putting in the effort to achieve exceptional results.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            About Gladys Cleaning Agency
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Building a cleaner, healthier Lagos through dedication, professionalism, and care
          </p>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Message from Our Founder
              </h2>
              <p className="text-xl text-primary font-semibold">Gladys</p>
            </div>

            <div className="bg-card p-8 md:p-10 rounded-xl shadow-lg border border-border">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hello! I'm Gladys, and I started this company with a simple belief: 
                everyone deserves to live and work in a clean, healthy environment. 
                Growing up, I learned the value of hard work and attention to detail 
                from my mother, who always said, "A clean space reflects a clear mind."
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over eight years ago, I began this journey with just a bucket, a mop, 
                and an unwavering commitment to excellence. Today, our team of 25 dedicated 
                professionals serves hundreds of satisfied clients across Lagos, from busy 
                families to thriving businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What drives us is not just cleaning spaces, but transforming lives. 
                When we make your home spotless or your office shine, we're giving you 
                the gift of time, peace of mind, and a healthier environment. That's the 
                heart of what we do, and it's what we'll continue to do as we grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-hero rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality and reliable cleaning services that improve 
                the well-being of individuals, families, and businesses across Lagos 
                and beyond, setting the standard for professionalism and excellence 
                in the cleaning industry.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-hero rounded-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted cleaning service provider in Lagos and 
                beyond, known throughout Nigeria for our unwavering professionalism, 
                integrity, and excellence in every service we deliver, creating 
                cleaner, healthier spaces for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-border hover:border-primary/50"
                >
                  <div className="p-3 bg-accent rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Stats />
      <Footer />
    </div>
  );
};

export default About;
