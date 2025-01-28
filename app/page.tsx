/** @format */

import FAQ from "@/components/landing/FAQ";
import FeaturesSection from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import PricingSection from "@/components/landing/Pricing";

export default function Home() {
    return (
        <div>
            <Hero />
            <FeaturesSection />
            <PricingSection />
            <FAQ />
        </div>
    );
}
