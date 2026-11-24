import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, Search, X } from 'lucide-react'
import ProjectIntroduction from './components/ProjectIntroduction.jsx'
import ProjectOverview from './components/ProjectOverview.jsx'
import InvestmentDetails from './components/InvestmentDetails.jsx'
import ProjectSectionNav from './components/ProjectSectionNav.jsx'
import ProjectLocation from './components/ProjectLocation.jsx'
import ProjectGallery from './components/ProjectGallery.jsx'
import ProjectUpdates from './components/ProjectUpdates.jsx'
import ProjectDocuments from './components/ProjectDocuments.jsx'
import ProjectFaqs from './components/ProjectFaqs.jsx'
import SimilarOpportunities from './components/SimilarOpportunities.jsx'
import ProjectEnquiry from './components/ProjectEnquiry.jsx'
import ProjectFooter from './components/ProjectFooter.jsx'
import './stylesv2.css'

const opportunities = [
  { name: 'Skyline Heights', city: 'Delhi NCR', type: 'Residential', status: 'Ongoing', price: '₹25 – 50 Lakhs', term: '24 – 48 Months', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
  { name: 'Maple Residences', city: 'Bengaluru', type: 'Residential', status: 'Ongoing', price: '₹40 – 75 Lakhs', term: '24 – 36 Months', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80' },
  { name: 'The Aravalli Enclave', city: 'Jaipur, Rajasthan', type: 'Residential', status: 'Upcoming', price: '₹25 – 50 Lakhs', term: '18 – 36 Months', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80' },
]

export default function PageV2() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const closeMenu = () => setMenuOpen(false)

  return <div className="v2-page">
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Adhroga home"><span className="brand-name">adhroga</span><small>VENTURES PVT. LTD.</small></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#similar" onClick={closeMenu}>Opportunities⌄</a>
          <a href="#updates" onClick={closeMenu}>How It Works</a>
          <a href="#overview" onClick={closeMenu}>Our Approach</a>
          <a href="#project-footer" onClick={closeMenu}>About Us</a>
          <a href="#updates" onClick={closeMenu}>Insights</a>
          <a href="#faqs" onClick={closeMenu}>FAQ</a>
          <button className="nav-search" aria-label="Search opportunities" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}><Search size={18}/></button>
          <button className="btn btn-gold nav-cta" onClick={() => { closeMenu(); document.getElementById('similar')?.scrollIntoView({ behavior: 'smooth' }) }}>Explore Opportunities <ArrowRight size={14}/></button>
          {searchOpen && <form className="v2-search-form" onSubmit={event => { event.preventDefault(); document.getElementById('similar')?.scrollIntoView({ behavior: 'smooth' }); setSearchOpen(false); closeMenu() }}>
            <label htmlFor="v2-project-search">Search projects</label>
            <input id="v2-project-search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Project or city" />
            <button type="submit">Search <ArrowRight size={15}/></button>
          </form>}
      </nav>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main className="v2-main" id="top">
      <ProjectIntroduction />
      <ProjectSectionNav />
      <div className="v2-container">
        <ProjectOverview />
        <ProjectLocation />
        <ProjectGallery />
        <ProjectUpdates />
        {/* <InvestmentDetails /> */}
        <ProjectDocuments />
        <ProjectFaqs />
        <SimilarOpportunities opportunities={opportunities} searchTerm={searchTerm} />
        {/* <ProjectEnquiry /> */}
      </div>
    </main>
    <ProjectFooter />
  </div>
}