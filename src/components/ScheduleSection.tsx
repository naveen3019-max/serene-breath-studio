import { Clock, MapPin, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const schedule = [
    {
        day: "Monday",
        classes: [
            { time: "6:30 AM - 7:30 AM", name: "Morning Hatha", level: "All Levels", type: "in-person" },
            { time: "9:00 AM - 10:00 AM", name: "Vinyasa Flow", level: "Intermediate", type: "in-person" },
            { time: "6:00 PM - 7:00 PM", name: "Evening Meditation", level: "All Levels", type: "online" },
        ],
    },
    {
        day: "Tuesday",
        classes: [
            { time: "6:30 AM - 7:30 AM", name: "Pranayama", level: "All Levels", type: "in-person" },
            { time: "5:30 PM - 6:45 PM", name: "Ashtanga Yoga", level: "Intermediate", type: "in-person" },
            { time: "7:00 PM - 8:00 PM", name: "Gentle Hatha", level: "Beginner", type: "online" },
        ],
    },
    {
        day: "Wednesday",
        classes: [
            { time: "6:30 AM - 7:30 AM", name: "Morning Flow", level: "All Levels", type: "in-person" },
            { time: "10:00 AM - 11:00 AM", name: "Patanjali Yoga", level: "All Levels", type: "in-person" },
            { time: "6:00 PM - 7:00 PM", name: "Vinyasa Flow", level: "Intermediate", type: "in-person" },
        ],
    },
    {
        day: "Thursday",
        classes: [
            { time: "6:30 AM - 7:30 AM", name: "Meditation & Mindfulness", level: "All Levels", type: "in-person" },
            { time: "5:30 PM - 6:45 PM", name: "Ashtanga Yoga", level: "Intermediate", type: "in-person" },
            { time: "7:00 PM - 8:00 PM", name: "Restorative Yoga", level: "All Levels", type: "online" },
        ],
    },
    {
        day: "Friday",
        classes: [
            { time: "6:30 AM - 7:30 AM", name: "Hatha Yoga", level: "All Levels", type: "in-person" },
            { time: "9:00 AM - 10:00 AM", name: "Pranayama", level: "All Levels", type: "in-person" },
            { time: "6:00 PM - 7:00 PM", name: "Vinyasa Flow", level: "Intermediate", type: "in-person" },
        ],
    },
    {
        day: "Saturday",
        classes: [
            { time: "7:00 AM - 8:30 AM", name: "Weekend Intensive", level: "All Levels", type: "in-person" },
            { time: "9:00 AM - 10:00 AM", name: "Meditation Circle", level: "All Levels", type: "in-person" },
            { time: "10:30 AM - 11:30 AM", name: "Family Yoga", level: "All Levels", type: "in-person" },
        ],
    },
    {
        day: "Sunday",
        classes: [
            { time: "7:00 AM - 8:00 AM", name: "Sunrise Meditation", level: "All Levels", type: "in-person" },
            { time: "9:00 AM - 10:30 AM", name: "Sunday Flow", level: "All Levels", type: "in-person" },
            { time: "5:00 PM - 6:00 PM", name: "Yoga Philosophy", level: "All Levels", type: "online" },
        ],
    },
];

const ScheduleSection = () => {
    return (
        <section id="schedule" className="py-24 md:py-32 bg-card relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                        Weekly Classes
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                        Class Schedule
                        <br />
                        <span className="text-primary italic">& Timings</span>
                    </h2>
                    <p className="text-muted-foreground text-lg breathing-rhythm">
                        Find the perfect class time that fits your schedule. We offer morning,
                        afternoon, and evening sessions both in-person and online.
                    </p>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">In-Person</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Online</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-sm text-muted-foreground">Max 10 students per class</span>
                    </div>
                </div>

                {/* Schedule Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {schedule.map((day, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-3xl bg-background shadow-soft hover:shadow-medium transition-all duration-300"
                        >
                            <h3 className="font-serif text-2xl text-foreground mb-6 pb-4 border-b border-border">
                                {day.day}
                            </h3>
                            <div className="space-y-4">
                                {day.classes.map((classItem, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
                                    >
                                        <div className="flex items-start gap-2 mb-2">
                                            <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                            <span className="text-xs text-muted-foreground">{classItem.time}</span>
                                        </div>
                                        <h4 className="font-serif text-base text-foreground mb-1">
                                            {classItem.name}
                                        </h4>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                {classItem.level}
                                            </span>
                                            {classItem.type === "online" ? (
                                                <Monitor className="w-4 h-4 text-accent" />
                                            ) : (
                                                <MapPin className="w-4 h-4 text-primary" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                        <h4 className="font-serif text-xl text-foreground mb-3">Private Sessions</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            Schedule one-on-one sessions at your convenience. Available Monday-Sunday,
                            7:00 AM - 8:00 PM. Book at least 48 hours in advance.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                            <a href="#contact">Book Private Session</a>
                        </Button>
                    </div>
                    <div className="p-6 rounded-2xl bg-gold/5 border border-gold/10">
                        <h4 className="font-serif text-xl text-foreground mb-3">Special Workshops</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            Monthly workshops on advanced techniques, yoga philosophy, and meditation.
                            Check our schedule or contact us for upcoming events.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                            <a href="#contact">View Workshops</a>
                        </Button>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-muted-foreground mb-6">
                        Ready to join a class? Book your spot today!
                    </p>
                    <Button size="lg" asChild>
                        <a href="#contact">Reserve Your Class</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
