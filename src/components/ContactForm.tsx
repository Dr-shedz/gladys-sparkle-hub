import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll respond within 24 hours.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full Name *</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email Address *</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">Phone Number</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+234 801 234 5678"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Subject *</Label>
        <Input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="How can we help you?"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          rows={6}
          required
          className="bg-background resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full shadow-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
