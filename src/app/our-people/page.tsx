import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import NewestAttorneys from '@/components/pages/our-people/newest-attorney'
import PeoplePageHero from '@/components/pages/our-people/our-people-hero'
import OurValues from '@/components/partials/our-values'
import FirmHighlights from '@/components/partials/firm-highlights'
import React from 'react'

function page() {
  return (
    <div>
        <Header />
        <PeoplePageHero />
        <NewestAttorneys />
        <OurValues />
        <FirmHighlights />
        <Footer />
    </div>
  )
}

export default page