import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d5e14daa-4fb6-484b-a9fb-980de13baec9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      // Check if response is ok and data.success is true
      if (response.ok && data.success) {
        setResult("Thank you for reaching out! We'll get back to you soon.");
        e.currentTarget.reset();
      } else {
        // Log the error for debugging
        console.error("Form submission error:", data);
        setResult(data.message || "Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Error submitting form. Please try again.");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "meena200614@gmail.com", href: "mailto:meena200614@gmail.com" },
    { icon: Phone, label: "Phone / WhatsApp", value: "+91 93205 50227", href: "https://wa.me/919320550227" },
    { icon: MapPin, label: "Alayam Studio Location", value: "Navi Mumbai, Maharashtra, India" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 organic-shape -translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Begin Your
            <br />
            <span className="text-primary italic">Journey Today</span>
          </h2>
          <p className="text-muted-foreground text-lg breathing-rhythm">
            Ready to transform your life through yoga? Reach out to discuss
            how we can support your wellness goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">Contact Information</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card hover:shadow-soft transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                        target={info.href.startsWith('http') ? "_blank" : undefined}
                        rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
              <h4 className="font-serif text-2xl mb-3">Ready to Start?</h4>
              <p className="text-primary-foreground/80 mb-6 breathing-rhythm">
                Book your first session today and receive a complimentary
                wellness consultation.
              </p>
              <Button variant="hero" className="group">
                Book Your Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-10 rounded-3xl bg-card shadow-soft">
            <h3 className="font-serif text-2xl text-foreground mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Name</label>
                <Input
                  name="name"
                  placeholder="Enter your name"
                  className="h-12 rounded-xl bg-background border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-xl bg-background border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your yoga goals..."
                  className="min-h-32 rounded-xl bg-background border-border/50 focus:border-primary resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </Button>

              {result && (
                <p className={`text-center text-sm ${result.includes("Error") || result.includes("wrong")
                  ? "text-red-500"
                  : result === "Sending..."
                    ? "text-muted-foreground"
                    : "text-primary"
                  }`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
