import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import AlumniHero from '@/components/pages/alumni-network/alumni-hero'
import React from 'react'

function page() {
  return (
    <div>
      <Header />
      <AlumniHero />
      <div className="h-5 bg-[#B2292E] mb-10" />
      <Footer />
    </div>
  );
}

export default page