import profileImg from "@/assets/profile.jpeg";
import { Award, GraduationCap, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, text: "15+ Years Experience" },
    { icon: Award, text: "RYT-500 Certified" },
    { icon: Globe, text: "Global Retreats" },
    { icon: Heart, text: "5000+ Students" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={profileImg}
                  alt="Yoga instructor profile"
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 organic-shape -z-10" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-gold/20 organic-shape animate-breathe -z-10" />
          </div>

          {/* Content Column */}
          <div className="lg:pl-8">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
              About Your Guide
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 leading-tight">
              Meena Siva Kumar
              <br />
              <span className="text-primary italic">Mindful Living</span>
            </h2>
            
            <p className="text-muted-foreground text-lg breathing-rhythm mb-6">
              With over 15 years of dedicated practice and teaching, I've had the privilege 
              of studying with renowned masters in India, Bali, and beyond. My approach 
              blends traditional yogic wisdom with modern understanding of the body and mind.
            </p>
            
            <p className="text-muted-foreground breathing-rhythm mb-4">
              Trained at the Iyengar Yoga Institute and the Krishnamacharya Yoga Mandiram, 
              I bring a unique perspective that honors ancient traditions while making yoga 
              accessible and relevant for today's world.
            </p>
            
            <p className="text-muted-foreground breathing-rhythm mb-4">
              Being a yoga instructor for above 4 years.<br />
              Conducted yoga workshops in various schools and colleges.<br />
              Been a judge for the yoga competition in the university.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
