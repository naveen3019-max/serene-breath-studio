import { ArrowRight } from "lucide-react";
import philosophyImg from "@/assets/instructor-philosophy.png";

const PhilosophySection = () => {
    const pillars = [
        {
            title: "Authentic Alignment",
            description: "My approach respects the unique geography of your body, focusing on sustainable movement and structural integrity.",
        },
        {
            title: "Mindful Stillness",
            description: "We cultivate the ability to find silence between the breaths, bridging the gap between movement and meditation.",
        },
        {
            title: "Everyday Integration",
            description: "The goal is not just to feel peace on the mat, but to extend that clarity and poise into your daily life.",
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-glow">
                            <img
                                src={philosophyImg}
                                alt="Yoga Instructor Portrait"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-soft/20 organic-shape animate-float blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 organic-shape animate-breathe blur-3xl" />
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                            The Path to Mastery
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
                            The Philosophy of
                            <br />
                            <span className="text-primary italic">Mindful Practice</span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-12 breathing-rhythm">
                            Teaching yoga is about more than guiding postures; it's about holding
                            space for transformation. My methodology is rooted in three core pillars
                            designed to foster growth and inner peace.
                        </p>

                        <div className="space-y-8">
                            {pillars.map((pillar, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary font-serif italic text-lg transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        0{index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <button className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors duration-300">
                                Learn more about my methodology
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
