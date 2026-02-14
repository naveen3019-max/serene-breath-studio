import { Heart, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const links = {
    practice: [
      { name: "Hatha Yoga", href: "/#services" },
      { name: "Vinyasa Flow", href: "/#services" },
      { name: "Meditation", href: "/#services" },
      { name: "Private Sessions", href: "/#services" },
    ],
    about: [
      { name: "Our Story", href: "/#about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Contact", href: "/#contact" },
    ],
    resources: [
      { name: "Schedule", href: "/#schedule" },
      { name: "Pricing", href: "/#pricing" },
      { name: "FAQ", href: "/#faq" },
      { name: "Blog", href: "/#faq" },
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
                <span className="text-foreground font-serif text-lg">A</span>
              </div>
              <span className="font-serif text-xl font-semibold text-background">
                Alayam Yoga
              </span>
            </div>
            <p className="text-background/70 breathing-rhythm max-w-sm mb-6">
              Guiding you on your journey to inner peace, physical strength,
              and mindful living through the transformative practice of yoga.
            </p>

            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center text-background/50 hover:text-background hover:border-primary-soft hover:bg-primary-soft/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

            <p className="text-sm text-background/50">
              Alayam Yoga Studio, Navi Mumbai, India
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
            © {currentYear} Alayam Yoga. All rights reserved.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary-soft" /> for mindful living by verbenatech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
