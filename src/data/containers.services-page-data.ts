"use client";

import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  CheckCircle,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  DollarSign,
  FileCheck2,
  FileCode,
  FileSpreadsheet,
  FileText,
  Globe,
  Handshake,
  Layers,
  Link2,
  Mail,
  MapPin,
  Monitor,
  MousePointerClick,
  PhoneCall,
  PiggyBank,
  RefreshCcw,
  RefreshCw,
  Search,
  Send,
  Settings,
  Share2,
  Shield,
  ShieldCheck,
  Sliders,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Users2,
  XCircle,
  Zap,
} from "lucide-react";

export const ServicesDetailTabSectionData = [
  {
    id: "medical-billing",
    title: "Medical Billing & Coding",
    description:
      "Streamline your billing workflow with accurate claim submissions, reduced denials, and faster reimbursements. We handle everything from CPT & ICD-10 coding to insurance claim management, ensuring your revenue cycle runs smoothly.",
    link: "/services/medical-billing-coding",
  },

  // {
  //   id: "drug-rehab",
  //   title: "Drug & Rehabilitation Billing",
  //   description:
  //     "Specialized billing solutions tailored for rehabilitation centers, behavioral health facilities, and addiction treatment providers. Our team ensures compliance with payer requirements while maximizing reimbursement rates.",
  //   link: "/services/drug-rehabilitation-billing",
  // },

  // {
  //   id: "medical-scribing",
  //   title: "Medical Scribing",
  //   description:
  //     "Eliminate documentation stress with our professional scribing services. We capture patient encounters in real time, giving providers more time to focus on delivering quality care.",
  //   link: "/services/medical-scribbing",
  // },

  {
    id: "credentialing",
    title: "Credentialing Services",
    description:
      "Get credentialed quickly with insurance networks and payers. Our experts handle the paperwork and follow-ups, ensuring your practice is enrolled and eligible for reimbursements without delays.",
    link: "/services/credentialing",
  },

  {
    id: "state-licensing",
    title: "State Licensing Assistance",
    description:
      "Expand your practice with confidence. We help healthcare providers meet state licensing requirements, keeping your operations fully compliant with regulatory standards.",
    link: "/services/state-licensing",
  },

  {
    id: "ar-denial",
    title: "Accounts Receivable (AR) & Denial Management",
    description:
      "Recover lost revenue with our AR follow-up and denial management strategies. We identify recurring issues, resolve claim rejections, and improve your overall collection rates.",
    link: "/services/ar-denial-management",
  },

  {
    id: "virtual-assistant",
    title: "Virtual Assistant Services",
    description:
      "Delegate administrative tasks to our trained virtual assistants. From appointment scheduling to patient follow-ups, we ensure your operations run smoothly while saving you time and costs.",
    link: "/services/virtual-assistant",
  },

  // {
  //   id: "digital-marketing",
  //   title: "Digital Marketing for Healthcare",
  //   description:
  //     "Grow your practice's online presence with our healthcare-focused digital marketing solutions, including SEO, PPC campaigns, and social media management. We help you reach more patients and build brand authority.",
  //   link: "/services/digital-marketing",
  // },
];

export const ServicesWhyChooseUsSectionData = [
  {
    icon: FileSpreadsheet,
    title: "Accurate Medical Billing",
    description:
      "Ensure error-free claims with precise coding and real-time claim validation — leading to faster reimbursements and fewer denials.",
    bgColor: "bg-green-50",
    themColor: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Optimized Revenue Growth",
    description:
      "Maximize your collections with advanced analytics, denial management, and end-to-end revenue cycle optimization.",
    bgColor: "bg-purple-50",
    themColor: "text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Compliant Security",
    description:
      "Your data is protected with the highest standards of compliance and encryption — ensuring full patient confidentiality.",
    bgColor: "bg-orange-50",
    themColor: "text-orange-600",
  },
  {
    icon: Users2,
    title: "Dedicated Expert Support",
    description:
      "Work with certified billing professionals who provide 24/7 assistance, dedicated account management, and performance transparency.",
    bgColor: "bg-rose-50",
    themColor: "text-rose-600",
  },
];

export const ArDenialManagementServiceIncludeSectionData = [
  {
    title: "Claim Denial Analysis & Resolution",
    description:
      "Identify root causes, correct errors, and resubmit claims for faster resolution.",
    icon: Search,
  },
  {
    title: "Aging AR Recovery",
    description:
      "Efficient follow-up on unpaid claims to recover lost revenue and improve cash flow.",
    icon: RefreshCcw,
  },
  {
    title: "Payer Follow-Up",
    description:
      "Persistent and professional communication with insurance companies to ensure timely payments.",
    icon: PhoneCall,
  },
  {
    title: "Appeals Management",
    description:
      "Strong, evidence-based appeals to overturn denied claims and secure rightful reimbursements.",
    icon: FileText,
  },
  {
    title: "Trend Reporting",
    description:
      "Analyze denial patterns and payer behaviors to prevent future issues.",
    icon: BarChart3,
  },
  {
    title: "Revenue Optimization",
    description:
      "Customized strategies designed to boost reimbursement rates and minimize leakage.",
    icon: TrendingUp,
  },
];

export const CredentialingServiceIncludeSectionData = [
  {
    title: "Provider Enrollment",
    description:
      "Quick and accurate enrollment with Medicare, Medicaid, and commercial payers.",
    icon: ClipboardCheck,
  },
  {
    title: "Insurance Linkage",
    description:
      "Connecting providers with insurance networks to ensure timely reimbursements and smooth payer communication.",
    icon: Link2,
  },
  {
    title: "Re-Credentialing",
    description:
      "Stay updated and avoid interruptions in reimbursements through proactive re-credentialing management.",
    icon: RefreshCcw,
  },
  {
    title: "Re-Negotiations",
    description:
      "Handling payer contract re-negotiations to improve reimbursement rates and optimize revenue potential.",
    icon: Handshake,
  },
  {
    title: "CAQH Profile Management",
    description:
      "Complete setup, updates, and attestation for providers, ensuring compliance and data accuracy across networks.",
    icon: FileText,
  },
  {
    title: "State Licensing Assistance",
    description:
      "Comprehensive support with new applications, renewals, and regulatory compliance for state medical licenses.",
    icon: BadgeCheck,
  },
];

export const DigitalMarketingServiceIncludeSectionData = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher on Google with targeted healthcare keywords and optimized content strategies.",
    icon: Search,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Run effective Google Ads and social media campaigns that attract qualified healthcare leads.",
    icon: MousePointerClick,
  },
  {
    title: "Social Media Management",
    description:
      "Build engagement and trust on platforms like Facebook, Instagram, and LinkedIn.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    description:
      "Publish valuable blogs, articles, and patient education content to establish credibility and authority.",
    icon: FileText,
  },
  {
    title: "Website Design & Optimization",
    description:
      "Create mobile-friendly, SEO-optimized websites for improved user experience and visibility.",
    icon: Monitor,
  },
  {
    title: "Reputation Management",
    description:
      "Monitor, manage, and enhance your online reviews and patient feedback across all platforms.",
    icon: Star,
  },
  {
    title: "Email Marketing Campaigns",
    description:
      "Engage patients through newsletters, reminders, and promotional offers to build loyalty.",
    icon: Mail,
  },
];

export const DrugRehabilitationBillingServiceIncludeSectionData = [
  {
    title: "Accurate Coding & Documentation",
    description:
      "Proper coding for substance abuse treatment, therapy sessions, and rehab services using ICD-10, CPT, and HCPCS.",
    icon: FileText,
  },
  {
    title: "Insurance Verification & Pre-Authorization",
    description:
      "We confirm patient eligibility and secure pre-approvals to avoid delays in payment.",
    icon: ClipboardCheck,
  },
  {
    title: "Claim Submission & Tracking",
    description:
      "Timely filing and real-time tracking to ensure faster reimbursements.",
    icon: Send,
  },
  {
    title: "Denial Prevention & Management",
    description:
      "Identify and resolve common rehab billing errors that lead to denied claims.",
    icon: RefreshCcw,
  },
  {
    title: "Patient Billing Support",
    description:
      "Clear, patient-friendly billing for easier collections and better transparency.",
    icon: Users,
  },
  {
    title: "Compliance & Confidentiality",
    description:
      "Strict adherence to HIPAA, Medicare, and state-specific billing regulations.",
    icon: ShieldCheck,
  },
];

export const MedicalBillingCodingServiceIncludeSectionData = [
  {
    title: "End-to-End Medical Billing & Coding",
    description:
      "Comprehensive billing and coding solutions that streamline revenue cycle management from charge entry to payment posting.",
    icon: FileText,
  },
  {
    title: "Verification Of Benefits",
    description:
      "Accurate eligibility and benefits verification to ensure clean claims and minimize payment delays.",
    icon: CheckCircle,
  },
  {
    title: "Claim Submission & Tracking",
    description:
      "Fast, compliant electronic claim submission with real-time status tracking for improved reimbursement efficiency.",
    icon: Send,
  },
  {
    title: "Denial Management",
    description:
      "Systematic review and resolution of denied claims to recover lost revenue and prevent recurring issues.",
    icon: RefreshCw,
  },
  {
    title: "Account Receivables",
    description:
      "Proactive follow-ups and AR optimization strategies to accelerate collections and maintain healthy cash flow.",
    icon: DollarSign,
  },
  {
    title: "Financial Reporting",
    description:
      "Insightful, data-driven financial reports that give you a clear view of performance, trends, and opportunities.",
    icon: BarChart3,
  },
  {
    title: "HIPAA-Compliant Protection",
    description:
      "We protect patient data with strict adherence to HIPAA and industry-standard security protocols.",
    icon: ShieldCheck,
  },
];

export const MedicalScribbingServiceIncludeSectionData = [
  {
    title: "Accurate Coding (CPT, ICD-10, HCPCS)",
    description:
      "Our certified coders ensure every claim is coded correctly to minimize errors and maximize reimbursements.",
    icon: FileCode,
  },
  {
    title: "Claims Submission & Tracking",
    description:
      "Fast and efficient submission with active follow-up to prevent delays.",
    icon: Send,
  },
  {
    title: "Denial Management",
    description:
      "Proactive identification, correction, and resubmission of denied claims.",
    icon: XCircle,
  },
  {
    title: "Patient Billing & Collections",
    description:
      "Transparent, patient-friendly billing solutions to improve collections and satisfaction.",
    icon: Users,
  },
  {
    title: "Revenue Cycle Management (RCM)",
    description:
      "Comprehensive oversight from claim creation to final payment.",
    icon: BarChart3,
  },
  {
    title: "HIPAA-Compliant Practices",
    description:
      "We protect patient data with strict adherence to HIPAA regulations.",
    icon: ShieldCheck,
  },
];

export const VirtualAssistanceServiceIncludeSectionData = [
  {
    title: "Patient Scheduling & Administrative Support",
    description:
      "Managing appointments, reminders, and front-office coordination to improve patient experience and reduce administrative load.",
    icon: PhoneCall,
  },
  {
    title: "Medical Transcription & Documentation",
    description:
      "Accurately recording patient encounters and updating EMR/EHR systems with structured, compliant data.",
    icon: FileText,
  },
  {
    title: "Insurance Verification & Eligibility Checks",
    description:
      "Performing real-time insurance verification and eligibility confirmation to prevent claim rejections and delays.",
    icon: Shield,
  },
  {
    title: "Virtual Scribing Services",
    description:
      "Providing real-time virtual scribing support to capture clinical notes, streamline workflows, and let providers focus on care.",
    icon: ClipboardList,
  },
];

export const StateLicensingServiceIncludeSectionData = [
  {
    title: "New License Applications",
    description:
      "Complete support for physicians, NPs, PAs, and other healthcare providers applying for new state licenses.",
    icon: FileText,
  },
  {
    title: "License Renewals",
    description:
      "Proactive renewal management to ensure licenses are updated on time and without any lapse in authorization.",
    icon: RefreshCcw,
  },
  {
    title: "Multi-State Licensing",
    description:
      "Simplified process for providers expanding their practice across multiple states with efficient coordination and tracking.",
    icon: MapPin,
  },
  {
    title: "Verification & Documentation",
    description:
      "Comprehensive assistance with education, employment, and background verification required for state licensing.",
    icon: ClipboardCheck,
  },
  {
    title: "DEA Registration & Renewals",
    description:
      "End-to-end support for obtaining and renewing DEA registrations for controlled substance prescribing.",
    icon: ShieldCheck,
  },
  {
    title: "Compliance Monitoring",
    description:
      "Ongoing compliance tracking to ensure all licensing and regulatory requirements are met, avoiding penalties or delays.",
    icon: CheckCircle,
  },
];

export const WhyChooseIndividualServiceSectionVirtualAssistantData = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description:
      "Eliminate the high costs of in-house staff with our affordable outsourcing model.",
  },
  {
    icon: BarChart3,
    title: "Increased Productivity",
    description: "Free up your team’s time to focus on patient care.",
  },
  {
    icon: UserCheck,
    title: "Trained Professionals",
    description:
      "Virtual assistants skilled in healthcare operations, HIPAA compliance, and EMR systems.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Add or reduce support as your practice grows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    description:
      "Patient data is always handled with strict compliance and security protocols.",
  },
];

export const WhyChooseIndividualServiceSectionMedicalScribbingData = [
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description:
      "Practices partnering with us see revenue growth of up to 30% within the first 90 days.",
  },
  {
    icon: Clock,
    title: "Save Time & Costs",
    description: "Eliminate the overhead of in-house billing staff.",
  },
  {
    icon: CheckCircle2,
    title: "Fewer Errors, Faster Payments",
    description:
      "Advanced technology + expert coders = smoother reimbursements.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "Tailored strategies for solo practices, multi-specialty clinics, and large healthcare facilities.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Real-time analytics and performance tracking to keep you in control.",
  },
];

export const WhyChooseIndividualServiceSectionMedicalBillingCodingData = [
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description:
      "Practices partnering with us see revenue growth of up to 30% within the first 90 days.",
  },
  {
    icon: Clock,
    title: "Save Time & Costs",
    description: "Eliminate the overhead of in-house billing staff.",
  },
  {
    icon: CheckCircle2,
    title: "Fewer Errors, Faster Payments",
    description:
      "Advanced technology + expert coders = smoother reimbursements.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "Tailored strategies for solo practices, multi-specialty clinics, and large healthcare facilities.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Real-time analytics and performance tracking to keep you in control.",
  },
];

export const WhyChooseIndividualServiceSectionDrugRehabilitationBillingData = [
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description:
      "Our team is highly experienced in drug treatment and behavioral health billing.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description:
      "Rehab facilities partnering with us report 20–30% increases in collections.",
  },
  {
    icon: FileCheck2,
    title: "Error-Free Processing",
    description:
      "We minimize coding mistakes and maximize payer reimbursements.",
  },
  {
    icon: PiggyBank,
    title: "Cost-Effective Outsourcing",
    description:
      "Save thousands in overhead by eliminating in-house billing staff.",
  },
  {
    icon: BarChart3,
    title: "Full Transparency",
    description:
      "Access detailed reports to track claims, payments, and practice performance.",
  },
];

export const WhyChooseIndividualServiceSectionDigitalMarketingData = [
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description:
      "We specialize in digital marketing for healthcare providers, medical practices, and wellness brands.",
  },
  {
    icon: Users,
    title: "Patient-Centric Approach",
    description:
      "Our marketing strategies are designed to connect with patients, build trust, and improve engagement.",
  },
  {
    icon: Sliders,
    title: "Customized Campaigns",
    description:
      "We create tailored marketing solutions that fit the unique goals and specialties of your practice.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description:
      "Access transparent reports with measurable ROI, conversions, and campaign performance insights.",
  },
  {
    icon: Globe,
    title: "All-in-One Service",
    description:
      "From SEO to PPC, content creation, and social media — we manage your entire digital presence under one roof.",
  },
];

export const WhyChooseIndividualServiceSectionCredentialingData = [
  {
    icon: Clock,
    title: "Faster Approvals",
    description: "Minimize delays and start billing payers sooner.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Guaranteed",
    description:
      "Adherence to state and federal requirements, including HIPAA and CMS.",
  },
  {
    icon: DollarSign,
    title: "Revenue Protection",
    description: "Avoid claim rejections due to credentialing errors.",
  },
  {
    icon: FileCheck2,
    title: "Time-Saving",
    description: "Eliminate hours of administrative paperwork.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Credentialing experts available for continuous updates and monitoring.",
  },
];

export const WhyChooseIndividualServiceSectionArDenialManagementData = [
  {
    icon: DollarSign,
    title: "Faster Cash Flow",
    description:
      "Reduce AR aging and accelerate collections through proactive follow-ups and process optimization.",
  },
  {
    icon: XCircle,
    title: "Fewer Denials",
    description:
      "Our experts ensure claims are accurately submitted the first time to minimize denials and delays.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Identify recurring denial patterns and implement strategies to prevent future issues.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Focused",
    description:
      "HIPAA-compliant workflows that align with payer regulations and ensure data security.",
  },
  {
    icon: Users,
    title: "Dedicated Specialists",
    description:
      "A skilled team solely focused on managing AR and minimizing denials for your practice.",
  },
];

export const WhyChooseIndividualServiceSectionStateLicensingData = [
  {
    icon: Clock,
    title: "Time-Saving",
    description:
      "We handle the complex paperwork and coordination so you can stay focused on patient care.",
  },
  {
    icon: ShieldCheck,
    title: "Accuracy & Compliance",
    description:
      "Our licensing experts ensure every application is error-free and fully compliant with all state regulations.",
  },
  {
    icon: Zap,
    title: "Faster Processing",
    description:
      "Accelerate approval timelines and minimize administrative bottlenecks with our streamlined approach.",
  },
  {
    icon: Briefcase,
    title: "Multi-Specialty Support",
    description:
      "Comprehensive licensing support for physicians, behavioral health providers, therapists, and other specialists.",
  },
  {
    icon: Users,
    title: "Dedicated Specialists",
    description:
      "Receive personalized, end-to-end guidance from our team of experienced licensing professionals.",
  },
];
