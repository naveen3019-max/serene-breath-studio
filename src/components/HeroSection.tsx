import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import natureImage from "@/assets/hero-forest.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Nature Image (no lady photo) */}
      <div className="absolute inset-0">
        <img
          src={natureImage}
          alt="Serene nature background for yoga"
          className="w-full h-full object-cover"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        />
        {/* Transparent protective overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
      </div>

      {/* Floating Organic Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 organic-shape animate-float blur-3xl" />
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-lavender/20 organic-shape animate-float animation-delay-400 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/30 organic-shape animate-breathe blur-2xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-primary-foreground/80 text-sm font-medium tracking-[0.3em] uppercase mb-6 animate-fade-up">
            Find Your Inner Balance
          </span>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-medium leading-[1.1] mb-8 animate-fade-up animation-delay-200">
            Where Breath
            <br />
            <span className="italic">Meets Movement</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 breathing-rhythm animate-fade-up animation-delay-400">
            Discover the transformative power of yoga through personalized guidance.
            Cultivate strength, flexibility, and peace of mind on your journey to wellness.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
            <Button asChild variant="hero" size="lg" className="group">
              <a href="#about">
                Begin Your Journey
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="hero-outline" size="lg" className="group">
              <a href="#services">
                <Play className="mr-2 w-4 h-4" />
                View Classes
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
