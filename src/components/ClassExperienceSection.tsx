import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import studioImg from "@/assets/studio-atmosphere.png";
import classImg from "@/assets/class-atmosphere.png";
import smallGroupImg from "@/assets/small-group-yoga.jpg";

const ClassExperienceSection = () => {
    const highlightFeatures = [
        {
            title: "Intimate Group Sizes",
            description: "Practice in a focused environment with a maximum of 10 students per class.",
        },
        {
            title: "Premium Equipment",
            description: "We provide high-quality natural rubber mats, bolsters, and organic cotton props.",
        },
        {
            title: "Sanctuary Design",
            description: "Our studio is designed with sustainable materials and soft natural lighting.",
        },
    ];

    return (
        <section id="experience" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Content Side */}
                    <div>
                        <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                            The Serenity Experience
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
                            A Sacred Space for
                            <br />
                            <span className="text-primary italic">Transformation</span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-10 breathing-rhythm">
                            Your journey deserves an environment that inspires peace. At Serenity,
                            we've curated every detail—from the scent of sandalwood to the
                            soft morning light—to help you leave the world behind.
                        </p>

                        <div className="space-y-6 mb-10">
                            {highlightFeatures.map((feature, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-semibold text-foreground">{feature.title}</h4>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="group">
                            Book Your First Session
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    {/* Image Side - Studio View */}
                    <div className="relative group">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-glow aspect-video lg:aspect-square">
                            <img
                                src={studioImg}
                                alt="Minimalist Zen Yoga Studio"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                        </div>
                        {/* Floating Label */}
                        <div className="absolute -bottom-6 -right-6 md:right-12 bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-soft max-w-[200px] animate-fade-up">
                            <p className="text-xs text-primary font-medium tracking-widest uppercase mb-2">Atmosphere</p>
                            <p className="text-sm font-serif italic text-foreground">"The quietest room in the city, designed for your peace."</p>
                        </div>
                    </div>
                </div>

                {/* Second Row - Class Atmosphere */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group order-2 lg:order-1">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-glow aspect-video lg:aspect-square mb-8">
                            <img
                                src={smallGroupImg}
                                alt="Small group yoga class session"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                            Small Groups,
                            <br />
                            <span className="text-primary italic">Big Connection</span>
                        </h3>
                        <p className="text-muted-foreground text-lg mb-8 breathing-rhythm">
                            You're not just a face in a crowded room. Our small group sizes
                            ensure that every student receives the personal adjustments and
                            guidance they need to practice safely and effectively.
                        </p>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                            <p className="text-foreground italic font-serif text-lg">
                                "The instructor actually знает my name and notices my alignment.
                                I've never felt so seen in a yoga class."
                            </p>
                            <p className="text-primary text-sm mt-4 font-medium">— Sarah M., Member since 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassExperienceSection;
