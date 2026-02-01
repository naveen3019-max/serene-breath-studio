
import { Flower2, Wind, Waves, Monitor, Users, Sparkles, Flame, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  {
    icon: Wind,
    title: "Hatha Yoga",
    description: "A typical hatha yoga integrates asanas (postures), pranayama (mindful breathing) and meditation to align, strengthen and balance the body and mind. It promotes calmness and focus.",
    duration: "60-90 min",
    level: "Beginner Friendly",
    focus: "Alignment & Foundational Strength",
    color: "bg-accent/30",
  },
  {
    icon: BookOpen,
    title: "Patanjali Yoga",
    description: "It is a classical system of yoga focusing on calming the mind's fluctuations to achieve spiritual enlightenment, not just physical postures. It is a holistic path.",
    duration: "60-75 min",
    level: "Deep Practice",
    focus: "Spiritual Growth & Mental Control",
    color: "bg-blue-100/40",
  },
  {
    icon: Flame,
    title: "Ashtanga Yoga",
    description: "This practice follows a precise order of poses (asanas), creating internal heat and detoxification through a vigorous, flowing sequence.",
    duration: "75-90 min",
    level: "Intermediate/Advanced",
    focus: "Detoxification & Physical Discipline",
    color: "bg-orange-100/50",
  },
  {
    icon: Waves,
    title: "Vinyasa Flow",
    description: "It is fluid movement through a series of postures. It builds strength and flexibility. It is a high energy practice that increases heart rate and strengthens the body.",
    duration: "60 min",
    level: "Step-Up Level",
    focus: "Strength, Flexibility & Fluidity",
    color: "bg-primary/10",
  },
  {
    icon: Wind,
    title: "Pranayama",
    description: "It is a yogic practice of breath control. It uses specific techniques like deep inhalation (purak) and holding breath (kumbak) and slow exhalation (rechaka). It helps to calm the mind.",
    duration: "20-40 min",
    level: "All Paths",
    focus: "Vital Energy & Nervous System Regulation",
    color: "bg-cyan-100/40",
  },
  {
    icon: Flower2,
    title: "Meditation & Mindfulness",
    description: "Directing attention to a single point. Noticing thoughts and feelings as they arise. Cultivating a feeling of compassion and warmth towards yourself and others.",
    duration: "30-60 min",
    level: "All Levels Welcome",
    focus: "Inner Peace & Emotional Balance",
    color: "bg-lavender/30",
  },
  {
    icon: Users,
    title: "Private Sessions",
    description: "Personalized one-on-one guidance tailored to your unique needs and goals. Perfect for deep individualized attention.",
    duration: "60 min",
    level: "Customized for You",
    focus: "Targeted Goals & Personalized Adjustments",
    color: "bg-gold/20",
  },
  {
    icon: Monitor,
    title: "Online Classes",
    description: "Join live virtual sessions from anywhere in the world with full interaction and real-time posture corrections.",
    duration: "60 min",
    level: "Accessible to All",
    focus: "Global Connection & Home Practice",
    color: "bg-accent/30",
  },
  {
    icon: Sparkles,
    title: "Retreats & Workshops",
    description: "Immersive experiences in beautiful locations for deep transformation, community building, and intensive practice.",
    duration: "Multi-day",
    level: "Immersive Experience",
    focus: "Deep Transformation & Community",
    color: "bg-lavender/30",
  },
  {
    icon: Users,
    title: "Yoga Philosophy",
    description: "Explore the roots and wisdom of yoga philosophy with our experienced instructors through sacred texts and discussions.",
    duration: "45 min",
    level: "Curious Minds",
    focus: "Ancient Wisdom & Ethics",
    color: "bg-emerald-100/40",
    extra: true,
  },
  {
    icon: BookOpen,
    title: "Instructor Q&A",
    description: "Get your questions answered in live Q&A sessions with our yoga teachers about practice, lifestyle, and philosophy.",
    duration: "30 min",
    level: "All Questers",
    focus: "Knowledge Sharing & Clarification",
    color: "bg-pink-100/40",
    extra: true,
  },
  {
    icon: Flower2,
    title: "Teacher's Special Class",
    description: "Unique classes designed and led by our lead instructors for deeper learning of advanced techniques and variations.",
    duration: "60 min",
    level: "Enthusiasts",
    focus: "Advanced Variations & Deep Dive",
    color: "bg-indigo-100/40",
    extra: true,
  },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.filter((s) => !s.extra);

  const [expanded, setExpanded] = useState(false);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-background shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-border/40 hover:border-primary/20"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-4">{service.title}</h3>

              <div className="mb-6 flex-grow">
                <p className="text-muted-foreground text-sm breathing-rhythm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border/40">
                  <span className="text-xs font-semibold text-primary/60 uppercase tracking-widest mb-2 block">Core Focus</span>
                  <p className="text-foreground text-sm font-medium italic">
                    {service.focus}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-auto">

                {service.title === "Online Classes" && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/40 text-secondary-foreground text-xs font-medium">
                    <Wind className="w-3.5 h-3.5 opacity-60" />
                    {service.duration}
                  </div>
                )}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 opacity-60" />
                  {service.level}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          {!showAll && (
            <Button variant="default" size="lg" onClick={() => setShowAll(true)}>
              Explore More Programs
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
