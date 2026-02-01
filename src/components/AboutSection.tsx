import profileImg from "@/assets/images/about-me.jpg";
import { Award, GraduationCap, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, text: "10+ Years Experience" },
    { icon: Award, text: "University Certified" },
    { icon: Globe, text: "Global Reach" },
    { icon: Heart, text: "Students of all ages" },
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
              My journey with yoga began over 10+ years ago, where I discovered the profound
              connection between breath, movement, and inner peace. Since then, I started to
              deepen this practice and sharing its transformative power with others
              worldwide.
            </p>

            <p className="text-muted-foreground breathing-rhythm mb-4">
              I've had the honor of studying and certified at University, School of Ayurveda
              established to provide service par excellence to mankind through knowledge of
              Ayurveda and related areas of life sciences, where I learned the sacred art of
              alignment, pranayama, and therapeutic yoga. My training encompasses various
              styles including Hatha, Vinyasa Flow, Ashtanga, Patanjali Yoga, Pranayam and
              Meditation practices, allowing me to offer a well-rounded approach to each
              student's unique journey.
            </p>

            <p className="text-muted-foreground breathing-rhythm mb-4">
              As a university certified yoga instructor with years of professional teaching
              experience, I've guided students from complete beginners to advanced
              practitioners. I've conducted transformative workshops in schools, colleges
              and had the privilege of serving as a judge for university yoga competitions
              which was conducted by government of India
            </p>

            <p className="text-muted-foreground breathing-rhythm mb-4">
              My teaching philosophy is simple: yoga is not about only doing asanas and
              pranayam; it's about discovering yourself, connecting with your inner soul. I
              believe in creating a healthy life, where everybody is privileged, every
              breath is sacred, and every student can discover their own unique path to
              wellness and self-discovery.
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
