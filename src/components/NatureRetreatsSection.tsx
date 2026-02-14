import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import himalayaImg from "@/assets/retreat-himalaya.png";
import beachImg from "@/assets/retreat-beach.png";
import forestImg from "@/assets/retreat-forest.png";

const retreats = [
    {
        image: himalayaImg,
        title: "Himalayan Breath",
        location: "Rishikesh, Himalayas",
        description: "Deepen your practice amidst the grounding energy of the world's highest peaks.",
        tag: "Mountain Retreat",
    },
    {
        image: beachImg,
        title: "Coastal Calm",
        location: "Maldives, Indian Ocean",
        description: "Find your rhythm with the soothing sounds of turquoise waves and ocean breeze.",
        tag: "Oceanfront",
    },
    {
        image: forestImg,
        title: "Forest Deep",
        location: "Monteverde, Costa Rica",
        description: "Reconnect with nature in the heart of the ancient, lush cloud forest.",
        tag: "Nature Immersion",
    },
];

const NatureRetreatsSection = () => {
    return (
        <section id="retreats" className="py-24 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                            Global Destinations
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                            Our Featured
                            <br />
                            <span className="text-primary italic">Nature Retreats</span>
                        </h2>
                        <p className="text-muted-foreground text-lg breathing-rhythm">
                            Join us for immersive wellness experiences in the most serene
                            locations on Earth. Each retreat is curated to restore balance.
                        </p>
                    </div>
                    <Button variant="outline" className="group">
                        View All Retreats
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {retreats.map((retreat, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[2rem] bg-card border border-border/50 hover:shadow-glow transition-all duration-500"
                        >
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <img
                                    src={retreat.image}
                                    alt={retreat.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                    onDragStart={(e) => e.preventDefault()}
                                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                                />
                                {/* Transparent protective overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 rounded-full bg-background/20 backdrop-blur-md text-background text-xs font-medium tracking-wider uppercase border border-background/20">
                                        {retreat.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 relative">
                                <div className="flex items-center gap-2 text-primary-soft text-sm mb-3">
                                    <MapPin className="w-4 h-4" />
                                    <span>{retreat.location}</span>
                                </div>
                                <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                    {retreat.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                                    {retreat.description}
                                </p>
                                <Button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border-primary/20 transition-all duration-300">
                                    Explore Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NatureRetreatsSection;
