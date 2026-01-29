import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JourneyBeginsTeaser = () => {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 organic-shape blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 organic-shape blur-3xl animate-float animation-delay-400" />

            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 animate-breathe">
                        <Sparkles className="w-10 h-10 text-primary" />
                    </div>

                    {/* Heading */}
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                        Start Your Transformation
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                        How the Journey
                        <br />
                        <span className="text-primary italic">Begins</span>
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg md:text-xl breathing-rhythm mb-8 max-w-2xl mx-auto">
                        Curious about how online yoga classes work? Discover the simple,
                        personalized process that makes practicing yoga from anywhere in the
                        world feel natural and effective.
                    </p>

                    {/* CTA Button */}
                    <Button size="lg" asChild className="group">
                        <Link to="/how-it-works">
                            Discover How It Works
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>

                    {/* Supporting Text */}
                    <p className="text-sm text-muted-foreground mt-6">
                        Learn about the 4-step process from consultation to ongoing support
                    </p>
                </div>
            </div>
        </section>
    );
};

export default JourneyBeginsTeaser;
