import React from "react";

import { ServiceCard } from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Our Expertise" center>
        Comprehensive Roofing Services
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="New Roof Installations"
          description="Complete roof replacements using premium slate or tile. We handle everything from structural timber work to the final finish."
          imageSrc="/service-new-roof.png"
          imageAlt="New roof installation in progress with slate tiles and timber battens"
        />
        <ServiceCard
          title="Roof Repairs"
          description="Slipped tiles, leaks, or storm damage? Our rapid response team identifies and fixes issues before they become expensive problems."
          imageSrc="/service-repairs.png"
          imageAlt="Roofer lifting roof tiles to inspect and repair a leak"
        />
        <ServiceCard
          title="Flat Roofing"
          description="Modern EPDM rubber and GRP fibreglass flat roof systems. Durable, waterproof solutions perfect for garages and extensions."
          imageSrc="/service-flat-roof.png"
          imageAlt="Roofer installing a flat roof membrane on a residential extension"
        />
        <ServiceCard
          title="Chimney Work"
          description="Repointing, lead flashing repair, and chimney removal. We ensure your chimney is safe, stable, and watertight."
          imageSrc="/service-chimney.png"
          imageAlt="Chimney lead flashing installed on a tiled roof"
        />
        <ServiceCard
          title="Emergency Call-outs"
          description="24/7 emergency roofing service. When disaster strikes, we're there to secure your property and prevent further damage."
          imageSrc="/service-emergency.png"
          imageAlt="Emergency roof tarping during heavy rain"
        />
        <ServiceCard
          title="Fascias & Soffits"
          description="uPVC fascia, soffit, and guttering installation. Low maintenance solutions that improve your home's kerb appeal."
          imageSrc="/service-fascias.png"
          imageAlt="Modern uPVC fascias and soffits on a newly finished home exterior"
        />
      </div>
    </section>
  );
}
