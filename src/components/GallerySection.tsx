import { useState } from "react";
import natureMeditationImg from "@/assets/nature-meditation-new.jpg";
import sunriseYogaImg from "@/assets/sunrise-yoga.jpg";
import instructorOnlineImg from "@/assets/online-yoga-main.jpg";
import communityImg from "@/assets/international-community.png";
import studioSessionImg from "@/assets/studio-session.jpg";
import awardsImg from "@/assets/awards.jpg";
import studioPracticeImg from "@/assets/studio-practice.jpg";

const GallerySection = () => {
    const images = [
        {
            src: awardsImg,
            alt: "Certification ceremony with instructor and students",
            title: "Achievements",
            category: "Milestones",
        },
        {
            src: studioPracticeImg,
            alt: "Students practicing yoga in the studio",
            title: "Daily Practice",
            category: "Studio",
        },
        {
            src: studioSessionImg,
            alt: "Group yoga session in outdoor studio",
            title: "Studio Session",
            category: "Studio",
        },
        {
            src: natureMeditationImg,
            alt: "Yoga instructor in nature meditation pose",
            title: "Nature Meditation",
            category: "Practice",
        },
        {
            src: sunriseYogaImg,
            alt: "Yoga practice at sunrise by the lake",
            title: "Sunrise Session",
            category: "Practice",
        },
        {
            src: instructorOnlineImg,
            alt: "Live online teaching session",
            title: "Online Teaching",
            category: "Live Classes",
        },
        {
            src: communityImg,
            alt: "Global online yoga community circle",
            title: "Global Community",
            category: "Experience",
        },
        {
            src: instructorOnlineImg,
            alt: "Instructor demonstrating poses in online session",
            title: "Live Instruction",
            category: "Online",
        },
    ];

    return (
        <section id="gallery" className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 organic-shape blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 organic-shape blur-3xl" />

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                        Visual Story
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                        Studio & <span className="text-primary italic">Practice</span> Gallery
                    </h2>
                    <p className="text-muted-foreground text-lg breathing-rhythm">
                        Take a glimpse into our sanctuary of peace, where ancient traditions
                        meet the modern digital world.
                    </p>
                </div>

                {/* Masonry-style Gallery */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-[2.5rem] shadow-soft hover:shadow-glow transition-all duration-700 break-inside-avoid mb-6"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
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
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-primary-foreground/80 text-xs font-medium tracking-widest uppercase mb-2">
                                    {image.category}
                                </span>
                                <h3 className="text-white font-serif text-2xl">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
