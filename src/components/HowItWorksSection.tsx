import { CheckCircle2, Video, Calendar, ClipboardCheck, TrendingUp, Heart, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import natureMeditationImg from "@/assets/nature-meditation-new.jpg";
import sunriseYogaImg from "@/assets/sunrise-yoga.jpg";
import onlineTeachingImg from "@/assets/online-yoga-main.jpg";
import communityImg from "@/assets/international-community.png";

const HowItWorksSection = () => {
    const steps = [
        {
            number: "01",
            icon: Calendar,
            title: "Book Your Free Consultation",
            description: "Schedule a complimentary 15-minute video call to discuss your goals, experience level, and any specific needs or concerns.",
            details: [
                "Discuss your yoga experience and fitness level",
                "Share any injuries or health considerations",
                "Explore your wellness goals and expectations",
                "Choose the best class type and schedule for you",
            ],
            image: natureMeditationImg,
        },
        {
            number: "02",
            icon: ClipboardCheck,
            title: "Personalized Assessment",
            description: "I'll create a customized approach based on your unique body, goals, and lifestyle to ensure safe and effective practice.",
            details: [
                "Evaluate your flexibility and strength baseline",
                "Identify areas that need special attention",
                "Design modifications for your body type",
                "Set realistic short-term and long-term goals",
            ],
            image: sunriseYogaImg,
        },
        {
            number: "03",
            icon: Video,
            title: "Live Interactive Sessions",
            description: "Join live online classes where I can see you, guide you in real-time, and provide immediate feedback and adjustments.",
            details: [
                "High-quality video connection via Zoom/Google Meet",
                "Real-time posture corrections and alignment cues",
                "Personalized modifications during class",
                "Small group sizes (max 5-6) for individual attention",
            ],
            image: onlineTeachingImg,
        },
        {
            number: "04",
            icon: TrendingUp,
            title: "Progress Tracking & Support",
            description: "Regular check-ins, progress assessments, and ongoing support to help you achieve your wellness goals.",
            details: [
                "Monthly progress reviews and goal adjustments",
                "Access to recorded sessions for practice",
                "WhatsApp/email support between classes",
                "Recommendations for home practice routines",
            ],
            image: communityImg,
        },
    ];

    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -z-10" />

            {/* Decorative SVG Ornaments */}
            <div className="absolute top-20 left-10 opacity-[0.03] select-none pointer-events-none rotate-12">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0C50 0 55 20 75 25C75 25 55 30 50 50C50 50 45 30 25 25C25 25 45 20 50 0Z" />
                </svg>
            </div>
            <div className="absolute bottom-40 right-10 opacity-[0.03] select-none pointer-events-none -rotate-12">
                <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0C50 0 55 20 75 25C75 25 55 30 50 50C50 50 45 30 25 25C25 25 45 20 50 0Z" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                        The Journey Begins
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                        How It Works
                        <br />
                        <span className="text-primary italic">Step by Step</span>
                    </h2>
                    <p className="text-muted-foreground text-lg breathing-rhythm">
                        From your first consultation to ongoing practice, I guide you through every
                        step of your yoga journey with personalized attention and expert support.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="max-w-6xl mx-auto mb-20">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <span className="font-serif text-6xl text-primary/20">{step.number}</span>
                                </div>

                                <h3 className="font-serif text-3xl text-foreground mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-muted-foreground text-lg mb-6 breathing-rhythm">
                                    {step.description}
                                </p>

                                <ul className="space-y-3">
                                    {step.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image Side */}
                            <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                                <div className="relative group">
                                    <div className="rounded-[3rem] overflow-hidden shadow-glow border-4 border-white/50">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
                                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                                    </div>
                                    {/* Floating Number Badge */}
                                    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold text-white flex items-center justify-center font-serif text-2xl shadow-glow">
                                        {index + 1}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Teaching Principles */}
                <div className="max-w-6xl mx-auto mb-20 relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -z-10 blur-2xl" />
                    <div className="text-center mb-16 pt-16">
                        <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Our Foundation</span>
                        <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                            My Teaching <span className="text-primary italic">Philosophy</span>
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-6 rounded-full" />
                        <p className="text-muted-foreground text-lg breathing-rhythm max-w-2xl mx-auto">
                            Every class is built on these core principles to ensure you have
                            the best possible experience, balancing ancient wisdom with modern care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 px-4 pb-16">
                        {[
                            {
                                icon: Heart,
                                title: "Safety First",
                                color: "from-pink-100 to-red-50",
                                iconColor: "text-red-500",
                                description: "Every pose is taught with proper alignment and modifications to prevent injury and ensure sustainable practice."
                            },
                            {
                                icon: Users,
                                title: "Individual Attention",
                                color: "from-blue-100 to-indigo-50",
                                iconColor: "text-indigo-500",
                                description: "Small class sizes ensure you receive personalized guidance and corrections tailored to your unique needs."
                            },
                            {
                                icon: MessageCircle,
                                title: "Clear Communication",
                                color: "from-amber-100 to-orange-50",
                                iconColor: "text-orange-500",
                                description: "Detailed verbal cues and demonstrations make it easy to follow along, even if you're new to yoga."
                            }
                        ].map((principle, index) => (
                            <div
                                key={index}
                                className="group relative p-10 rounded-[2.5rem] bg-card border border-border/60 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 shadow-soft hover:shadow-glow overflow-hidden"
                            >
                                {/* Decorative background circle */}
                                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${principle.color} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 blur-xl`} />

                                <div className="relative z-10 text-center">
                                    <div className="w-20 h-20 mx-auto rounded-3xl bg-secondary/30 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-500">
                                        <principle.icon className={`w-10 h-10 ${principle.iconColor}`} />
                                    </div>
                                    <h4 className="font-serif text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                                        {principle.title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {principle.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What You'll Need Section */}
                <div className="max-w-5xl mx-auto mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 rounded-[4rem] -z-10 blur-3xl" />
                    <div className="bg-card/40 backdrop-blur-md p-10 md:p-16 rounded-[3.5rem] border border-border/40 shadow-soft overflow-hidden">
                        <div className="text-center mb-12">
                            <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Preparation</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                                What You'll Need for <span className="text-primary italic">Online Classes</span>
                            </h3>
                            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Video className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-serif text-2xl text-foreground">Technology</h4>
                                </div>
                                <ul className="space-y-4 text-muted-foreground bg-secondary/20 p-8 rounded-3xl border border-border/40">
                                    {[
                                        "Laptop, tablet, or smartphone with camera",
                                        "Stable internet connection (minimum 5 Mbps)",
                                        "Zoom, Google Meet, or Skype installed"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-gold" />
                                    </div>
                                    <h4 className="font-serif text-2xl text-foreground">Equipment</h4>
                                </div>
                                <ul className="space-y-4 text-muted-foreground bg-secondary/20 p-8 rounded-3xl border border-border/40">
                                    {[
                                        "Yoga mat (or comfortable non-slip surface)",
                                        "Comfortable, stretchy clothing",
                                        "Water bottle and towel",
                                        "Optional: yoga blocks, strap, or cushion"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-r from-primary/5 to-gold/5 border border-primary/20 shadow-inner">
                            <p className="text-muted-foreground text-center italic">
                                <strong className="text-foreground not-italic font-semibold">Pro Tip:</strong> Position your camera so I can see
                                your full body (head to feet) for the best alignment guidance. A space of about 6x4 feet is ideal for your practice.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <h3 className="font-serif text-2xl text-foreground mb-4">
                        Ready to Begin Your Journey?
                    </h3>
                    <p className="text-muted-foreground mb-8 breathing-rhythm">
                        Book your free consultation today and take the first step toward
                        a healthier, more balanced life.
                    </p>
                    <Button size="lg" asChild>
                        <a href="#contact">Schedule Free Consultation</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
