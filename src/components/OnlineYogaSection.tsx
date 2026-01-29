import { Globe, Users, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import instructorOnlineImg from "@/assets/instructor-online-teaching.png";
import communityImg from "@/assets/international-community.png";

const OnlineYogaSection = () => {
    const features = [
        {
            icon: Globe,
            title: "Global Community",
            description: "Connect with students from USA, UK, Europe, Australia, and beyond",
        },
        {
            icon: Clock,
            title: "Flexible Timing",
            description: "Classes scheduled to accommodate your time zone",
        },
        {
            icon: Users,
            title: "Small Groups",
            description: "Maximum 5-6 students for personalized attention",
        },
        {
            icon: Heart,
            title: "Personal Touch",
            description: "Real-time feedback and adjustments via video",
        },
    ];

    return (
        <section id="online-yoga" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 organic-shape blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 organic-shape blur-3xl" />

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                        Practice From Anywhere
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                        Online Yoga Classes
                        <br />
                        <span className="text-primary italic">For the World</span>
                    </h2>
                    <p className="text-muted-foreground text-lg breathing-rhythm">
                        Join students from across the globe in live, interactive yoga sessions.
                        Experience the same personalized guidance and community connection from
                        the comfort of your home.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="rounded-[3rem] overflow-hidden shadow-glow">
                            <img
                                src={instructorOnlineImg}
                                alt="Yoga instructor teaching online class"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow max-w-[200px]">
                            <p className="text-3xl font-serif mb-1">10+</p>
                            <p className="text-sm">Countries Reached</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h3 className="font-serif text-3xl text-foreground mb-6">
                            Your Journey,
                            <br />
                            <span className="text-primary italic">Your Space</span>
                        </h3>
                        <p className="text-muted-foreground text-lg mb-8 breathing-rhythm">
                            Whether you're in New York, London, Tokyo, or Sydney, bring the
                            transformative power of yoga into your daily life. My online classes
                            are designed specifically for international students, with flexible
                            scheduling and interactive sessions that feel just like being in the studio.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
                                >
                                    <feature.icon className="w-6 h-6 text-primary mb-3" />
                                    <h4 className="font-serif text-base text-foreground mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" asChild className="group">
                            <a href="#contact">
                                Book Your First Online Session
                                <Globe className="ml-2 w-4 h-4 transition-transform group-hover:rotate-12" />
                            </a>
                        </Button>
                    </div>
                </div>

                {/* International Community Showcase */}
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-[3rem] overflow-hidden shadow-glow bg-card p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h3 className="font-serif text-3xl text-foreground mb-4">
                                A Truly <span className="text-primary italic">Global</span> Practice
                            </h3>
                            <p className="text-muted-foreground breathing-rhythm">
                                Experience the power of practicing together, even when we're apart.
                                Our online community brings together yoga enthusiasts from every corner of the world.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src={communityImg}
                                alt="International yoga community practicing together online"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-8 text-center">
                            <div>
                                <p className="font-serif text-3xl text-primary mb-1">Live</p>
                                <p className="text-sm text-muted-foreground">Interactive Sessions</p>
                            </div>
                            <div>
                                <p className="font-serif text-3xl text-primary mb-1">24/7</p>
                                <p className="text-sm text-muted-foreground">Flexible Scheduling</p>
                            </div>
                            <div>
                                <p className="font-serif text-3xl text-primary mb-1">100%</p>
                                <p className="text-sm text-muted-foreground">Personalized Guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineYogaSection;
