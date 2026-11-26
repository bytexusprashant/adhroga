import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Search,
  Menu,
  X,
  Building2,
  ShieldCheck,
  FileText,
  Users,
  CircleDollarSign,
  ChartNoAxesCombined,
  Scale,
  Clock3,
  BriefcaseBusiness,
  Building,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import HeroSection from "./components/HeroSection.jsx";
import Placeholder from "./components/Placeholder.jsx";
import BenefitsSection from "./components/BenefitsSection.jsx";
import ExploreSection from "./components/ExploreSection.jsx";
import FeaturedSection from "./components/FeaturedSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import WhySection from "./components/WhySection.jsx";
import ValueStripSection from "./components/ValueStripSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import ClosingCtaSection from "./components/ClosingCtaSection.jsx";

const projects = [
  {
    name: "The Green Estate",
    city: "Mohali, Punjab",
    type: "Residential",
    status: "Ongoing",
    price: "₹225 – 50 Lakhs",
    term: "24–36 Months",
    image: "project-1",
  },
  {
    name: "Skyline Heights",
    city: "Delhi NCR",
    type: "Commercial",
    status: "Completed",
    price: "₹550 Lakhs+",
    term: "24–48 Months",
    image: "project-2",
  },
  {
    name: "Maple Residences",
    city: "Bengaluru",
    type: "Residential",
    status: "Ongoing",
    price: "₹725 – 50 Lakhs",
    term: "18–36 Months",
    image: "project-3",
  },
  {
    name: "Business Park",
    city: "Hyderabad",
    type: "Commercial",
    status: "Upcoming",
    price: "₹21 Cr+",
    term: "18–36 Months",
    image: "project-4",
  },
  {
    name: "The Aravalli Enclave",
    city: "Jaipur, Rajasthan",
    type: "Land",
    status: "Upcoming",
    price: "₹10 – 25 Lakhs",
    term: "18–36 Months",
    image: "project-5",
  },
  {
    name: "Palm Grove Villas",
    city: "Pune, Maharashtra",
    type: "Mixed Use",
    status: "Ongoing",
    price: "₹35 – 75 Lakhs",
    term: "24–36 Months",
    image: "project-6",
  },
];
const benefits = [
  {
    icon: Building2,
    title: "Curated Opportunities",
    text: "Explore a focused selection of residential, commercial and land projects.",
  },
  {
    icon: ShieldCheck,
    title: "Asset-Backed Investments",
    text: "Review opportunities linked to identifiable property assets and project terms.",
  },
  {
    icon: FileText,
    title: "Transparency First",
    text: "Review available documents, costs, timelines and key project information before deciding.",
  },
  // { icon: Users, title: 'Built for Investors', text: 'Move from discovery to evaluation and follow project updates in one place.' },
];
const process = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    text: "Explore curated investment opportunities.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Evaluate",
    text: "Review project, developer and key information.",
  },
  {
    icon: CircleDollarSign,
    number: "03",
    title: "Invest",
    text: "Complete the investment process digitally.",
  },
  {
    icon: ChartNoAxesCombined,
    number: "04",
    title: "Track",
    text: "Monitor your investment and project progress.",
  },
];
const whyItems = [
  {
    icon: ShieldCheck,
    title: "Project Due Diligence",
    text: "In-depth analysis before listing.",
  },
  {
    icon: Building,
    title: "Developer Assessment",
    text: "Credible and experienced developers.",
  },
  {
    icon: Scale,
    title: "Legal Documentation",
    text: "Clear and verified documents.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Financial Transparency",
    text: "Transparent costs, structure and returns.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Project Tracking",
    text: "Regular updates on project progress.",
  },
  {
    icon: Users,
    title: "Investor Communication",
    text: "Dedicated support throughout the journey.",
  },
];

export default function PageV1() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState("All Projects");
  const [type, setType] = useState("All Types");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Recently Added");
  const [language, setLanguage] = useState("English");
  const [mapMode, setMapMode] = useState("Map");
  const [zoom, setZoom] = useState(1);
  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (status === "All Projects" || p.status === status) &&
          (type === "All Types" || p.type === type) &&
          `${p.name} ${p.city}`.toLowerCase().includes(search.toLowerCase()),
      ),
    [status, type, search],
  );
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Adhroga home">
          <span className="brand-name">adhroga</span>
          <small>VENTURES PVT. LTD.</small>
        </a>
        <nav className={mobileOpen ? "nav nav-open" : "nav"}>
          <a href="#opportunities">Opportunities⌄</a>
          <a href="#process">How It Works</a>
          <a href="#approach">Our Approach</a>
          <a href="#about">About Us</a>
          <a href="#insights">Insights</a>
          <a href="#faq">FAQ</a>
          <button
            className="nav-search"
            aria-label="Search"
            onClick={() => scrollTo("opportunities")}
          >
            <Search size={18} />
          </button>
          <button
            className="btn btn-gold nav-cta"
            onClick={() => scrollTo("opportunities")}
          >
            Explore Opportunities <ArrowRight size={14} />
          </button>
        </nav>
        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="top">
        <HeroSection Placeholder={Placeholder} scrollTo={scrollTo} />
        <BenefitsSection benefits={benefits} />
        <ExploreSection
          Placeholder={Placeholder}
          filtered={filtered}
          mapMode={mapMode}
          projects={projects}
          scrollTo={scrollTo}
          search={search}
          setMapMode={setMapMode}
          setSearch={setSearch}
          setSort={setSort}
          setStatus={setStatus}
          setType={setType}
          setZoom={setZoom}
          sort={sort}
          status={status}
          type={type}
          zoom={zoom}
        />
        <FeaturedSection
          Placeholder={Placeholder}
          projects={projects}
          scrollTo={scrollTo}
          setSearch={setSearch}
          setStatus={setStatus}
          setType={setType}
        />
        <ProcessSection process={process} />
        <WhySection scrollTo={scrollTo} whyItems={whyItems} />
        <ValueStripSection />
        <FaqSection language={language} setLanguage={setLanguage} />
        <ClosingCtaSection Placeholder={Placeholder} scrollTo={scrollTo} />
      </main>
      <footer className="footer" id="about">
        <div className="footer-main">
          <a className="brand footer-brand" href="#top">
            <span className="brand-name">adhroga</span>
            <small>VENTURES PVT. LTD.</small>
          </a>
          <nav>
            <a href="#opportunities">Opportunities</a>
            <a href="#process">How It Works</a>
            <a href="#approach">Our Approach</a>
            <a href="#about">About Us</a>
            <a href="#insights">Insights</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="socials">
            <a href="#about" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#about" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#about" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Adhroga Ventures Pvt. Ltd. All rights reserved.</span>
          <div>
            <a href="#about">Privacy Policy</a>
            <i /> <a href="#about">Terms & Conditions</a>
            <i /> <a href="#about">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
