import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, Award, Clock } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ icon: Icon, value, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div className="p-4 bg-gradient-hero rounded-full mb-4 shadow-md">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 animate-count-up">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground text-center font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Clock, value: 8, label: "Years of Experience", suffix: "+" },
    { icon: Users, value: 500, label: "Satisfied Clients", suffix: "+" },
    { icon: Briefcase, value: 1200, label: "Projects Completed", suffix: "+" },
    { icon: Award, value: 25, label: "Dedicated Staff" },
  ];

  return (
    <section className="py-16 md:py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Hundreds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of individuals and businesses across Lagos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
