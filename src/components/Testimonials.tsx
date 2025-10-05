import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Homeowner",
      content: "Gladys Cleaning Agency transformed my home! Their attention to detail is remarkable. I highly recommend their services to anyone looking for quality cleaning.",
      rating: 5,
    },
    {
      name: "Ngozi Okeke",
      role: "Business Owner",
      content: "Our office has never looked better. The team is professional, punctual, and thorough. They've become an essential part of maintaining our workspace.",
      rating: 5,
    },
    {
      name: "Ibrahim Musa",
      role: "Property Manager",
      content: "I manage several properties and Gladys Cleaning Agency handles all the cleaning. Reliable, efficient, and always exceeds expectations. Best decision I made!",
      rating: 5,
    },
    {
      name: "Chioma Eze",
      role: "Event Planner",
      content: "Their post-event cleaning service is a lifesaver! Quick, thorough, and they handle everything with care. Couldn't ask for a better cleaning partner.",
      rating: 5,
    },
    {
      name: "Tunde Adeyemi",
      role: "Restaurant Owner",
      content: "Maintaining hygiene standards is crucial in our business. Gladys Cleaning Agency ensures our restaurant is spotless every single day. Truly professional!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all h-full border border-border">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-secondary text-secondary"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
