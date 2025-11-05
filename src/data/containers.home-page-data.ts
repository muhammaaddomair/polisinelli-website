import {
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
  Users2,
} from "lucide-react";
import HomeServicesSectionImg01 from "../../public/images/home-services-section-img-01.jpg";
// import HomeServicesSectionImg02 from "../../public/images/home-services-section-img-02.jpg";
// import HomeServicesSectionImg03 from "../../public/images/home-services-section-img-03.jpg";
import HomeServicesSectionImg04 from "../../public/images/home-services-section-img-04.jpg";
import HomeServicesSectionImg05 from "../../public/images/home-services-section-img-05.jpg";
import HomeServicesSectionImg06 from "../../public/images/home-services-section-img-06.jpg";
import HomeServicesSectionImg07 from "../../public/images/home-services-section-img-07.jpg";
// import HomeServicesSectionImg08 from "../../public/images/home-services-section-img-08.jpg";

export const HomeWhyChooseUsSectionData = [
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

export const HomeServicesSectionData = [
  {
    id: "medical-billing",
    title: "Medical Billing & Coding",
    description:
      "Streamline your billing workflow with accurate claim submissions, reduced denials, and faster reimbursements. We handle everything from CPT & ICD-10 coding to insurance claim management, ensuring your revenue cycle runs smoothly.",
    image: HomeServicesSectionImg01,
    link: "/services/medical-billing-coding",
  },

  // {
  //   id: "drug-rehab",
  //   title: "Drug & Rehabilitation Billing",
  //   description:
  //     "Specialized billing solutions tailored for rehabilitation centers, behavioral health facilities, and addiction treatment providers. Our team ensures compliance with payer requirements while maximizing reimbursement rates.",
  //   image: HomeServicesSectionImg02,
  //   link: "/services/drug-rehabilitation-billing",
  // },

  // {
  //   id: "medical-scribing",
  //   title: "Medical Scribing",
  //   description:
  //     "Eliminate documentation stress with our professional scribing services. We capture patient encounters in real time, giving providers more time to focus on delivering quality care.",
  //   image: HomeServicesSectionImg03,
  //   link: "/services/medical-scribbing",
  // },

  {
    id: "credentialing",
    title: "Credentialing Services",
    description:
      "Get credentialed quickly with insurance networks and payers. Our experts handle the paperwork and follow-ups, ensuring your practice is enrolled and eligible for reimbursements without delays.",
    image: HomeServicesSectionImg04,
    link: "/services/credentialling-state-licensing",
  },

  {
    id: "state-licensing",
    title: "State Licensing Assistance",
    description:
      "Expand your practice with confidence. We help healthcare providers meet state licensing requirements, keeping your operations fully compliant with regulatory standards.",
    image: HomeServicesSectionImg05,
    link: "/services/credentialing",
  },

  {
    id: "ar-denial",
    title: "Accounts Receivable (AR) & Denial Management",
    description:
      "Recover lost revenue with our AR follow-up and denial management strategies. We identify recurring issues, resolve claim rejections, and improve your overall collection rates.",
    image: HomeServicesSectionImg06,
    link: "/services/ar-denial-management",
  },

  {
    id: "virtual-assistant",
    title: "Virtual Assistant Services",
    description:
      "Delegate administrative tasks to our trained virtual assistants. From appointment scheduling to patient follow-ups, we ensure your operations run smoothly while saving you time and costs.",
    image: HomeServicesSectionImg07,
    link: "/services/virtual-assistant",
  },

  // {
  //   id: "digital-marketing",
  //   title: "Digital Marketing for Healthcare",
  //   description:
  //     "Grow your practice's online presence with our healthcare-focused digital marketing solutions, including SEO, PPC campaigns, and social media management. We help you reach more patients and build brand authority.",
  //   image: HomeServicesSectionImg08,
  //   link: "/services/digital-marketing",
  // },
];

export const HomeFAQSectionData01 = [
  { icon: CheckCircle2, title: "Customer Satisfaction" },
  { icon: Lightbulb, title: "Innovation and Creativity" },
  { icon: Users, title: "RCM Experts" },
  { icon: Clock, title: "24/7 Proactive Support" },
];

export const HomeFAQSectionData02 = [
  {
    question: "What services does Solux Global offer?",
    answer:
      "Solux Global provides customized managed healthcare services, including Revenue Cycle Management, Medical Billing, Credentialing, State Licensing, Virtual Assistant support, and Medical Scribing solutions tailored to your practice needs.",
  },
  {
    question: "How can Solux Global help my business?",
    answer:
      "We help healthcare providers maximize revenue, reduce claim denials, improve compliance, and streamline billing operations. Our expert team works to optimize your revenue cycle and reduce administrative burden.",
  },
  {
    question: "Does Solux Global offer customizable service packages?",
    answer:
      "Yes, we offer fully customizable service packages designed to meet the unique needs of your practice. Contact us to discuss your specific requirements and create a tailored solution.",
  },
  {
    question: "What is your average claims processing time?",
    answer:
      "Our streamlined processes ensure fast claims processing with an average turnaround time of 24–48 hours, helping you get paid faster and improve cash flow.",
  },
];
