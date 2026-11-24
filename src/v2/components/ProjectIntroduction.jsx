import {
  ArrowRight, CalendarDays, ChevronRight, CircleDollarSign, Download,
  House, MapPin
} from 'lucide-react'

export default function ProjectIntroduction() {
  return <section className="v2-introduction" id="introduction">
    <div className="v2-intro-image" aria-hidden="true">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85" alt="" />
    </div>
    <div className="v2-intro-content">
      <nav className="v2-hero-breadcrumbs" aria-label="Breadcrumb">
        <a href="/v1">Home</a><ChevronRight size={16}/><a href="/v1#opportunities">Opportunities</a><ChevronRight size={16}/><span>The Green Estate</span>
      </nav>
      <div className="v2-intro-copy">
        <div className="v2-intro-meta"><span className="v2-hero-status">Ongoing</span><span className="v2-hero-location"><MapPin size={19}/>Mohali, Punjab</span></div>
        <h1>The Green Estate</h1>
        <p className="v2-intro-text">Modern residential development in a prime location with strong growth potential.</p>
        <div className="v2-intro-facts">
          <div className="v2-intro-fact"><House size={36}/><b>Residential</b></div>
          <div className="v2-intro-fact"><CircleDollarSign size={36}/><span><b>₹25 – 50 Lakhs</b><small>Investment Range</small></span></div>
          <div className="v2-intro-fact"><CalendarDays size={36}/><span><b>24 – 36 Months</b><small>Expected Tenure</small></span></div>
        </div>
        <div className="v2-intro-actions"><a className="v2-button-primary" href="#investment-details">Invest Now <ArrowRight size={16}/></a><a className="v2-button-brochure" href="#documents"><Download size={17}/>Download Brochure</a></div>
      </div>
    </div>
  </section>
}