import Header from "@/components/Header";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Back Button */}
            <div className="container mx-auto px-6 pt-24">
                <Button variant="ghost" asChild className="group">
                    <Link to="/">
                        <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </Button>
            </div>

            <main>
                <HowItWorksSection />
            </main>

            <Footer />
        </div>
    );
};

export default HowItWorksPage;
