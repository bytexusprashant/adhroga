import {
  ArrowRight, Building2, CalendarDays, ChartNoAxesCombined, CircleDollarSign,
  FileText, House, MapPin, PhoneCall, UserRound
} from 'lucide-react'

export default function ProjectOverview() {
  return <section className="v2-overview-section v2-section" id="overview">
    <div className="v2-overview-layout">
      <article className="v2-overview-copy">
        <h2>Project Overview</h2>
        <p>The Green Estate is a premium residential development located in Mohali, Punjab. Strategically positioned near key business hubs, educational institutions and upcoming infrastructure, the project offers strong long-term value for investors.</p>
        <div className="v2-overview-features">
          <article><span><MapPin size={24}/></span><div><h3>Prime Location</h3><p>Close to major connectivity routes</p></div></article>
          <article><span><Building2 size={24}/></span><div><h3>Reputed Developer</h3><p>Proven track record of successful projects</p></div></article>
          <article><span><ChartNoAxesCombined size={24}/></span><div><h3>Strong Demand</h3><p>High rental and resale potential</p></div></article>
          <article><span><FileText size={24}/></span><div><h3>Transparent Structure</h3><p>Clear documentation and defined process</p></div></article>
        </div>
      </article>

      <aside className="v2-key-highlights">
        <h3>Key Highlights</h3>
        <dl>
          <div><Building2 size={23}/><dt>Project Type</dt><dd>Residential</dd></div>
          <div><MapPin size={23}/><dt>Location</dt><dd>Mohali, Punjab</dd></div>
          <div><CircleDollarSign size={23}/><dt>Investment Range</dt><dd>₹25 – 50 Lakhs</dd></div>
          <div><CalendarDays size={23}/><dt>Expected Tenure</dt><dd>24 – 36 Months</dd></div>
          <div><CalendarDays size={23}/><dt>Project Status</dt><dd><span className="v2-highlight-status">Ongoing</span></dd></div>
          <div><House size={23}/><dt>RERA Registration</dt><dd>PBRERA-SAS79-PR1234</dd></div>
          <div><UserRound size={23}/><dt>Developer</dt><dd>ABC Developers Pvt. Ltd.</dd></div>
        </dl>
      </aside>

      <aside className="v2-overview-side">
        <article className="v2-overview-interest">
          <h3>Interested in<br/>This Project?</h3>
          <p>Get detailed information and invest in The Green Estate.</p>
          <a className="v2-button-primary v2-button-full" href="#investment-details">Express Interest <ArrowRight size={17}/></a>
        </article>
        <article className="v2-question-card">
          <h3>Have Questions?</h3>
          <p>Our team is here to help you with any queries.</p>
          <a href="#project-enquiry"><PhoneCall size={17}/>Talk to Our Team</a>
        </article>
      </aside>
    </div>
  </section>
}