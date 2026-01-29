import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emma Richardson",
    location: "London, UK",
    text: "This practice has completely transformed how I approach stress. I feel more grounded and peaceful than ever before. The guidance is exceptional.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    location: "Singapore",
    text: "As someone who travels constantly, the online sessions have been a lifeline. Professional, calming, and genuinely transformative experience.",
    rating: 5,
  },
  {
    name: "Sophia Williams",
    location: "New York, USA",
    text: "I came for the physical benefits but discovered so much more. The holistic approach addresses body and mind in such a beautiful way.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Community Voices
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Stories of
            <br />
            <span className="text-primary italic">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg breathing-rhythm">
            Join a global community of practitioners who have found peace,
            strength, and balance through their yoga journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-background shadow-soft hover:shadow-medium transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground breathing-rhythm mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-6">
                <p className="font-serif text-lg text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5000+", label: "Students Worldwide" },
            { number: "15+", label: "Years Experience" },
            { number: "10+", label: "Countries Reached" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-muted-foreground tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
