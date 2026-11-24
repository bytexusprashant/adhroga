import { ArrowRight } from 'lucide-react'

export default function ProcessSection({ process }) {
  return <section className="process-section" id="process"><div className="eyebrow">HOW ADHROGA WORKS</div><h2>A Simple, Transparent Investment Process</h2><div className="process-grid">{process.map(({ icon: Icon, number, title, text }) => <article className="process-step" key={number}><div className="process-step-top"><b className="step-number">{number}</b><div className="step-icon"><Icon size={24}/></div></div><div className="process-step-content"><h3>{title}</h3><p>{text}</p></div><ArrowRight className="step-arrow" size={18}/></article>)}</div></section>
}