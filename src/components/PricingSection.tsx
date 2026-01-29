import { Check, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
    {
        name: "Drop-In",
        price: "₹500",
        period: "per class",
        description: "Perfect for trying out our classes",
        features: [
            "Single class access",
            "All class types available",
            "Premium yoga mats provided",
            "Complimentary herbal tea",
        ],
        popular: false,
    },
    {
        name: "Monthly Unlimited",
        price: "₹4,500",
        period: "per month",
        description: "Best value for dedicated practitioners",
        features: [
            "Unlimited class access",
            "Priority booking",
            "Free workshop entry (1 per month)",
            "10% off private sessions",
            "Complimentary yoga mat storage",
            "Access to online library",
        ],
        popular: true,
    },
    {
        name: "10-Class Package",
        price: "₹4,000",
        period: "valid 3 months",
        description: "Flexibility for busy schedules",
        features: [
            "10 class credits",
            "Use for any class type",
            "Transferable to family/friends",
            "Premium equipment included",
        ],
        popular: false,
    },
];

const additionalOptions = [
    {
        title: "Private Sessions",
        price: "₹2,500/hour",
        description: "One-on-one personalized instruction tailored to your goals and needs.",
    },
    {
        title: "Online Classes",
        price: "₹300/class",
        description: "Join live virtual sessions from anywhere with full interaction and guidance.",
    },
    {
        title: "Corporate Wellness",
        price: "Custom Pricing",
        description: "Bring yoga to your workplace with customized programs for teams.",
    },
];

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 organic-shape blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 organic-shape blur-3xl" />

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                        Investment in Yourself
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                        Flexible Pricing
                        <br />
                        <span className="text-primary italic">For Every Journey</span>
                    </h2>
                    <p className="text-muted-foreground text-lg breathing-rhythm">
                        Choose the plan that fits your lifestyle and commitment level.
                        All packages include access to our beautiful studio space and premium equipment.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl ${plan.popular
                                    ? "bg-primary text-primary-foreground shadow-glow scale-105"
                                    : "bg-card shadow-soft"
                                } transition-all duration-500 hover:-translate-y-2`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold text-foreground text-xs font-medium tracking-wider uppercase flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" />
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3
                                    className={`font-serif text-2xl mb-2 ${plan.popular ? "text-primary-foreground" : "text-foreground"
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                                <div className="mb-2">
                                    <span
                                        className={`font-serif text-5xl ${plan.popular ? "text-primary-foreground" : "text-primary"
                                            }`}
                                    >
                                        {plan.price}
                                    </span>
                                </div>
                                <p
                                    className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                                        }`}
                                >
                                    {plan.period}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check
                                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary-foreground" : "text-primary"
                                                }`}
                                        />
                                        <span
                                            className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${plan.popular
                                        ? "bg-background text-foreground hover:bg-background/90"
                                        : ""
                                    }`}
                                variant={plan.popular ? "default" : "outline"}
                                size="lg"
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Additional Options */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl text-foreground text-center mb-8">
                        Additional <span className="text-primary italic">Options</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {additionalOptions.map((option, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300"
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-serif text-xl text-foreground mb-1">{option.title}</h4>
                                        <p className="text-primary font-medium">{option.price}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm">{option.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Special Offer */}
                <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 text-center">
                    <h4 className="font-serif text-2xl text-foreground mb-3">
                        New Student Special Offer
                    </h4>
                    <p className="text-muted-foreground mb-6 breathing-rhythm">
                        First-time students receive <span className="text-primary font-semibold">3 classes for ₹1,200</span> —
                        a perfect way to experience different class styles and find what resonates with you.
                    </p>
                    <Button size="lg" asChild>
                        <a href="#contact">Claim Your Offer</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
