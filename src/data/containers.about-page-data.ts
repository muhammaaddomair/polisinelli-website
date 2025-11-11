import {
  Award,
  FileSpreadsheet,
  Handshake,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users2,
} from "lucide-react";
import OriginSectionImg01 from "../../public/images/origin-section-img-01.jpg";
import OriginSectionImg02 from "../../public/images/origin-section-img-02.jpg";
import OriginSectionImg03 from "../../public/images/origin-section-img-03.jpg";

export const OriginSectionData = [
  {
    id: "mission",
    label: "Mission",
    image: OriginSectionImg01,
    title: "Our Mission",
    content:
      "To simplify the business side of healthcare through precision, transparency, and care. From full-cycle billing to virtual support and lien collections. We make every part of the revenue process smoother, faster, and smarter."

  },
  {
    id: "vision",
    label: "Vision",
    image: OriginSectionImg02,
    title: "Our Vision",
    content:
      "To create a healthcare ecosystem where providers focus on patients, not paperwork. We aim to be the most trusted partner for clinics seeking clarity, efficiency, and accountability in every stage of revenue management."
  },
  {
    id: "story",
    label: "Story",
    image: OriginSectionImg03,
    title: "Our Story",
    content:
      "We started with a simple idea: that healthcare providers deserve better support. Too many clinics were losing time, sleep, and revenue to systems that didn’t care. So we built something different, a team that listens, explains, and delivers.Today, we manage complete revenue cycles, provide skilled virtual assistants, and recover what’s owed through expert lien collections, all with one promise: to treat your practice like our own."
  },
];

export const WhyChooseUsSectionData = [
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

export const ValuesSectionData = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical standards in every interaction.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering high-quality billing and coding services with precision and reliability.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging advanced technology to streamline and enhance revenue cycle management.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your practice, not just a vendor.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centric",
    description:
      "Every service we provide is ultimately focused on supporting better patient care.",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];
