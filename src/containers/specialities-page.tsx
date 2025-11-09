import React from "react";

import PremiumSpecialtiesSection from "@/sections/specialities/premium-specialties-section";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";

function SpecialitiesPage() {
  return (
    <main>
      <PagesHeroSection
        title="Medical Billing Solutions for Every"
        highlightText="Healthcare Specialty"
        description="At Solux Global, we provide tailored medical billing and revenue cycle management services for a wide range of healthcare specialties. From family medicine and pediatrics to dentistry and neurology, our solutions help doctors and clinics streamline billing, maximize reimbursements, and stay fully compliant with industry regulations."
      />
      <PremiumSpecialtiesSection />
      <CTASection />
    </main>
  );
}

export default SpecialitiesPage;
