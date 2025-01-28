/** @format */

import FAQ from "@/components/landing/FAQ";
import Hero from "@/components/landing/Hero";
import PricingSection from "@/components/landing/Pricing";

export default function Home() {
    return (
        <div>
            <Hero />
            <PricingSection />
            <FAQ />
        </div>
    );
}
