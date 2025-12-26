import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import AboutUsHero from '@/components/pages/about-us/about-us-hero'
import AboutUsTabSection from '@/components/pages/about-us/about-us-tab'

import React from 'react'

function page() {
  return (
    <div>
        <Header />
        <AboutUsHero />
        <AboutUsTabSection />
        <Footer />
    </div>
  )
}

export default page