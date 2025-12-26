import CoastToCoast from '@/components/pages/home-page/coast-to-coast'
import CoreIndustries from '@/components/pages/home-page/core-industries'
import DifferenceAtWork from '@/components/pages/home-page/difference-at-work'
import FirmDescription from '@/components/pages/home-page/firm-description'
import FirmHighlights from '@/components/partials/firm-highlights'
import HomeHero from '@/components/pages/home-page/home-hero'
import React from 'react'

function page() {
  return (
    <div>
      <HomeHero />
      <FirmDescription />
      <CoreIndustries />
      <DifferenceAtWork />
      <CoastToCoast />
      <FirmHighlights />
    </div>
  )
}

export default page
