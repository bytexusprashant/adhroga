import { ArrowRight } from 'lucide-react'

export default function ClosingCtaSection({ Placeholder, scrollTo }) {
  return <section className="closing-cta" id="contact"><div className="closing-copy"><h2>Your Next Investment<br/>Could Be Closer Than You Think.</h2><p>Explore curated real estate investment opportunities with transparency and confidence.</p><button className="btn btn-gold" onClick={() => scrollTo('opportunities')}>Explore Opportunities <ArrowRight size={14}/></button></div><Placeholder className="closing-image" label="Luxury property at sunset"/></section>
}