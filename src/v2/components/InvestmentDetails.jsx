import { ArrowRight, Building2, CircleDollarSign, Clock3, ShieldCheck } from 'lucide-react'

export default function InvestmentDetails() {
  return <section className="v2-investment-details v2-section" id="investment-details">
    <div className="v2-section-heading"><div className="v2-eyebrow">PROJECT TERMS</div><h2>Investment details</h2><p>Review the key project information and available investment terms.</p></div>
    <div className="v2-investment-grid">
      <div className="v2-investment-facts">
        <article><span><Building2 size={20}/></span><small>Asset class</small><b>Residential</b></article>
        <article><span><CircleDollarSign size={20}/></span><small>Investment range</small><b>₹25 – 50 Lakhs</b></article>
        <article><span><Clock3 size={20}/></span><small>Expected tenure</small><b>24 – 36 Months</b></article>
        <article><span><ShieldCheck size={20}/></span><small>Project status</small><b>Ongoing</b></article>
      </div>
      <aside className="v2-interest-card" id="interest">
        <div className="v2-interest-top"><span className="v2-interest-icon"><ShieldCheck size={21}/></span><span className="v2-status"><i/>Ongoing</span></div>
        <h3>Interested in this opportunity?</h3>
        <p>Review the available project details and connect with Adhroga for further information.</p>
        <dl>
          <div><dt>Asset class</dt><dd>Residential</dd></div>
          <div><dt>Location</dt><dd>Mohali, Punjab</dd></div>
          <div><dt>Timeline</dt><dd>24–36 months</dd></div>
        </dl>
        <a className="v2-button-primary v2-button-full" href="/v1#opportunities">Explore opportunities <ArrowRight size={16}/></a>
        <small className="v2-disclaimer">All project details are subject to available disclosures and project-specific terms.</small>
      </aside>
    </div>
  </section>
}