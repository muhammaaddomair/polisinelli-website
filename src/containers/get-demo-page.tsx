import React from 'react'

import PagesHeroSection from '@/components/partials/pages-hero-section';
import GetDemoFormSection from '@/sections/get-demo/demo-form';
import CTASection from '@/components/partials/cta-section';

function GetDemoPage() {
  return (
    <main>
      <PagesHeroSection
        title="Unlock Your Practice's True Potential Today."
        highlightText="Get a Free Demo"
        description="Experience how Solux Global can streamline your revenue cycle and maximize efficiency. Schedule your personalized demo today and see the benefits for yourself."
      />
      <GetDemoFormSection />
      <CTASection />
    </main>
  );
}

export default GetDemoPage