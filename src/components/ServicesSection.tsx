import { Flower2, Wind, Waves, Monitor, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Flower2,
    title: "Meditation & Mindfulness",
    description: "Cultivate inner peace and mental clarity through guided meditation practices.",
    duration: "30-60 min",
    level: "All Levels",
    color: "bg-lavender/30",
  },
  {
    icon: Wind,
    title: "Hatha Yoga",
    description: "A typical hatha yoga integrates asanas (postures), pranayama (mindful breathing) and meditation to align, strengthen and balance the body and mind. It promotes calm and focus.",
    duration: "60-90 min",
    level: "Beginner",
    color: "bg-accent/30",
  },
  {
    icon: Waves,
    title: "Vinyasa Flow",
    description: "Dynamic sequences linking breath with movement for strength and flexibility.",
    duration: "60 min",
    level: "Intermediate",
    color: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Private Sessions",
    description: "Personalized one-on-one guidance tailored to your unique needs and goals.",
    duration: "60 min",
    level: "All Levels",
    color: "bg-gold/20",
  },
  {
    icon: Monitor,
    title: "Online Classes",
    description: "Join live virtual sessions from anywhere in the world with full interaction.",
    duration: "45-60 min",
    level: "All Levels",
    color: "bg-accent/30",
  },
  {
    icon: Sparkles,
    title: "Retreats & Workshops",
    description: "Immersive experiences in beautiful locations for deep transformation.",
    duration: "Multi-day",
    level: "All Levels",
    color: "bg-lavender/30",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Yoga Programs
            <br />
            <span className="text-primary italic">For Every Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg breathing-rhythm">
            Whether you're beginning your yoga practice or deepening your experience, 
            find the perfect program to support your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-background shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground breathing-rhythm mb-6">{service.description}</p>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {service.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {service.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            Explore All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
