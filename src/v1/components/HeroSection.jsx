import { ArrowRight, PlayCircle } from 'lucide-react'

export default function HeroSection({ Placeholder, scrollTo }) {
  return <section className="hero">
    <div className="hero-copy"><div className="eyebrow">REAL ESTATE INVESTMENT PLATFORM</div><h1>Invest in Real Estate.<br/><span>Built on Transparency.</span></h1><p>Adhroga brings curated real estate investment opportunities with clear information, professional due diligence and an investor-first approach.</p><div className="hero-actions"><button className="btn btn-gold" onClick={() => scrollTo('opportunities')}>Explore Opportunities <ArrowRight size={15}/></button><button className="btn btn-outline" onClick={() => scrollTo('process')}><PlayCircle size={17}/> How Adhroga Works</button></div></div>
    <div className="hero-visual"><Placeholder className="hero-image" label="Modern luxury real estate" /><div className="hero-caption">Institutional<br/>Grade Opportunities<br/>for Individual Investors.</div></div>
  </section>
}