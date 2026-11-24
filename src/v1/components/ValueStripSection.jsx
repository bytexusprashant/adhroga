import { Building2, FileText, ShieldCheck, Users } from 'lucide-react'

export default function ValueStripSection() {
  return <section className="value-strip"><div><Building2/><span><h3 className="title">Asset-backed</h3><small>Property-linked opportunities</small></span></div><div><ShieldCheck/><span><h3 className="title">Transparent</h3><small>Costs, terms and disclosures</small></span></div><div><FileText/><span><h3 className="title">Thorough review</h3><small>Project and document checks</small></span></div><div><Users/><span><h3 className="title">Investor-first</h3><small>Guidance and project updates</small></span></div></section>
}