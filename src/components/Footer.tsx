import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    practice: [
      { name: "Hatha Yoga", href: "#services" },
      { name: "Vinyasa Flow", href: "#services" },
      { name: "Meditation", href: "#services" },
      { name: "Private Sessions", href: "#services" },
    ],
    about: [
      { name: "Our Story", href: "#about" },
      { name: "Instructor", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Schedule", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Blog", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background/90 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center">
                <span className="text-foreground font-serif text-lg">S</span>
              </div>
              <span className="font-serif text-xl font-semibold text-background">
                Serenity Yoga
              </span>
            </div>
            <p className="text-background/70 breathing-rhythm max-w-sm mb-6">
              Guiding you on your journey to inner peace, physical strength, 
              and mindful living through the transformative practice of yoga.
            </p>
            <p className="text-sm text-background/50">
              123 Peaceful Lane
              <br />
              Wellness City, WC 12345
            </p>
          </div>

          {/* Practice Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-background">Practice</h4>
            <ul className="space-y-3">
              {links.practice.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-background">About</h4>
            <ul className="space-y-3">
              {links.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-background">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Serenity Yoga. All rights reserved.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary-soft" /> for mindful living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
