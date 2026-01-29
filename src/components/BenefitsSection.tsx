import { Brain, Heart, Leaf, Sun, Moon, Zap } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Reduces Stress & Anxiety",
    description: "Regular practice calms the nervous system and promotes emotional balance by lowering cortisol levels.",
    related: ["Deep Breathing", "Mindfulness", "Emotional Balance"],
  },
  {
    icon: Leaf,
    title: "Improves Flexibility",
    description: "Gentle stretching increases range of motion and releases muscle tension throughout the entire body.",
    related: ["Joint Mobility", "Muscle Release", "Better Posture"],
  },
  {
    icon: Zap,
    title: "Strengthens Body",
    description: "Build core strength and muscle tone through mindful, controlled movements without high-impact strain.",
    related: ["Core Stability", "Muscle Tone", "Functional Strength"],
  },
  {
    icon: Brain,
    title: "Enhances Mental Clarity",
    description: "Sharpen focus, improve concentration, and cultivate present-moment awareness through focused practice.",
    related: ["Focus & Attention", "Cognitive Health", "Mental Peace"],
  },
  {
    icon: Sun,
    title: "Boosts Energy",
    description: "Breathwork and movement invigorate the body and elevate your mood naturally for a sustained energy boost.",
    related: ["Pranayama", "Vitality", "Better Circulation"],
  },
  {
    icon: Moon,
    title: "Promotes Better Sleep",
    description: "Evening practices help calm the mind and prepare the body for restful, deep regenerative sleep.",
    related: ["Relaxation", "Insomnia Relief", "Sleep Quality"],
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 organic-shape animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gold/10 organic-shape animate-float animation-delay-600" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Transform Your Life
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            The Gifts of
            <br />
            <span className="text-primary italic">Consistent Practice</span>
          </h2>
          <p className="text-muted-foreground text-lg breathing-rhythm">
            Yoga is more than exercise—it's a complete system for wellbeing
            that nurtures body, mind, and spirit.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-soft hover:shadow-glow"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground breathing-rhythm text-sm leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Related Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {benefit.related.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium tracking-wider uppercase border border-primary/5 group-hover:border-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
