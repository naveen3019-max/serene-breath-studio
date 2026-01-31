import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do you offer online classes for international students?",
        answer:
            "Yes! I specialize in teaching international students through live online sessions. Students from the USA, UK, Europe, Australia, and other countries regularly join my classes. All you need is a stable internet connection and a quiet space to practice.",
    },
    {
        question: "How do online classes work with different time zones?",
        answer:
            "I offer flexible scheduling to accommodate different time zones. We can arrange sessions at times that work best for you, whether you're in New York, London, Sydney, or anywhere else in the world. I typically offer morning and evening slots (IST) which align well with various international time zones.",
    },
    {
        question: "What technology do I need for online classes?",
        answer:
            "You'll need a device with a camera and microphone (laptop, tablet, or smartphone), a stable internet connection, and a video conferencing app (Zoom, Google Meet, or Skype). I'll send you a meeting link before each session. Make sure your camera can capture your full body so I can provide proper alignment guidance.",
    },
    {
        question: "Can you see me during the online class to correct my posture?",
        answer:
            "Absolutely! My online classes are fully interactive. I can see you through your camera and provide real-time adjustments, corrections, and personalized guidance just like an in-person class. This ensures you practice safely and effectively from anywhere in the world.",
    },
    {
        question: "What payment methods do you accept for international students?",
        answer:
            "I accept international payments through PayPal, Wise (TransferWise), bank transfers, and major credit/debit cards. Payment details will be shared once we confirm your class schedule. Prices are typically quoted in USD or EUR for international students for convenience.",
    },
    {
        question: "Is English the language of instruction?",
        answer:
            "Yes, all my online classes for international students are conducted in English. I speak clearly and provide detailed verbal cues along with demonstrations, making it easy to follow along regardless of your location or native language.",
    },
    {
        question: "Do I need prior yoga experience to join online classes?",
        answer:
            "Not at all! I welcome complete beginners and provide modifications for every pose. Whether you're starting your yoga journey or looking to deepen your practice, I'll tailor the sessions to your level and goals. Many of my international students started with zero experience.",
    },
    {
        question: "What if I have a poor internet connection during class?",
        answer:
            "If you experience connectivity issues, we can pause and reconnect, or I can record the session for you to practice later. I also offer pre-recorded classes as an alternative. We'll find a solution that works best for your situation.",
    },
    {
        question: "Can I book private one-on-one sessions or do you only teach groups?",
        answer:
            "I offer both private one-on-one sessions and small group classes online. Private sessions are perfect for personalized attention, specific goals, or working with injuries. Group classes (maximum 5-6 students online) create a sense of community and are more affordable.",
    },
    {
        question: "How do I book and schedule my first online class?",
        answer:
            "Simply contact me via email (meena200614@gmail.com) or WhatsApp (+91 93205 50227) with your preferred time zone and availability. We'll schedule a free 15-minute consultation to discuss your goals, and then set up your first session. I'll send you all the necessary links and instructions.",
    },
    {
        question: "What is your cancellation and rescheduling policy?",
        answer:
            "I understand that time zones and schedules can be challenging. Please provide at least 24 hours notice for cancellations or rescheduling. For private sessions, I ask for 48 hours notice. This allows me to offer the slot to other students. Late cancellations may result in the loss of that session credit.",
    },
    {
        question: "Do you offer package deals for regular online students?",
        answer:
            "Yes! I offer discounted packages for students who commit to regular practice. Options include 5-class, 10-class, and monthly unlimited packages. Package pricing is flexible and can be customized based on your frequency and commitment. Contact me to discuss the best option for you.",
    },
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 organic-shape blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lavender/5 organic-shape blur-3xl" />

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                        Common Questions
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                        Frequently Asked
                        <br />
                        <span className="text-primary italic">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg breathing-rhythm">
                        Everything you need to know about joining online classes from anywhere in the world.
                        Can't find your answer? Feel free to contact me directly.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card rounded-2xl px-6 border border-border/50 shadow-soft hover:shadow-medium transition-shadow duration-300"
                            >
                                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary py-6 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground breathing-rhythm pb-6 pt-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                    >
                        Get in touch with us →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
