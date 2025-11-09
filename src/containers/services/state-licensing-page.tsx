import React from "react";

import FreeAuditFormSection from "@/sections/audit/free-audit-form-section";

import {
  
  WhyChooseIndividualServiceSectionWorkersCompData,
  WorkersCompServiceIncludeSectionData,
} from "@/data/containers.services-page-data";

import CTASection from "@/components/partials/cta-section";
import PagesHeroSection from "@/components/partials/pages-hero-section";
import ServiceIncludesSection from "@/components/partials/service-includes-section";
import WhyChooseIndividualServiceSection from "@/components/partials/why-choose-individual-service-section";

import StateLicensingServiceWhyChooseUsSectionImg from "../../../public/images/state-licensing-management-service-why-choose-us-section-img.jpg";

function StateLicensingPage() {
  return (
    <main>
      <PagesHeroSection
        title="Comprehensive Workers’ Compensation &"
        highlightText="Lien Resolution Services"
        description="Managing workers’ compensation claims and medical lien resolutions can be complex and time-consuming. At Solux Global, we streamline the process by handling claim documentation, lien negotiations, compliance verification, and end-to-end resolution—ensuring your reimbursements are accurate, timely, and fully compliant with state and federal requirements."
      />
      <ServiceIncludesSection
        firstHalfHeading="Our"
        highlightedHeading="Workers’ Compensation & Lien Resolution"
        remaningHeading="Services Include"
        data={WorkersCompServiceIncludeSectionData}
      />
      <FreeAuditFormSection />
      <WhyChooseIndividualServiceSection
        firstHalfHeading="Why"
        highlightedHeading="Workers’ Compensation & Lien Resolution"
        data={WhyChooseIndividualServiceSectionWorkersCompData}
        serviceImage={StateLicensingServiceWhyChooseUsSectionImg}
      />
      <CTASection />
    </main>
  );
}

export default StateLicensingPage;
