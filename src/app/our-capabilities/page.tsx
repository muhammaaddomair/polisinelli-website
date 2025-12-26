import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import CapabilitiesPageHero from '@/components/pages/our-capabilities/our-people-hero'
import PracticeAreas from '@/components/pages/our-capabilities/practice-areas'
import FirmHighlights from '@/components/partials/firm-highlights'
import React from 'react'

function page() {
  return (
    <div>
        <Header />
        <CapabilitiesPageHero />
        <PracticeAreas />
        <FirmHighlights />
        <Footer />
    </div>
  )
}

export default page