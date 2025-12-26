import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import AlumniSpotlight from '@/components/pages/alumni-network/alumini-content';
import AlumniHero from '@/components/pages/alumni-network/alumni-hero'
import FirmHighlights from '@/components/partials/firm-highlights';
import React from 'react'

function page() {
  return (
    <div>
      <Header />
      <AlumniHero />
      <div className="h-5 bg-[#B2292E] mb-10" />
      <AlumniSpotlight />
      <div className="h-[1px] bg-gray-500 mx-[100px]" />
      <FirmHighlights />
      <Footer />
    </div>
  );
}

export default page