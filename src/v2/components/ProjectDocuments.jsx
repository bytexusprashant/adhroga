import { ArrowRight, Download, FileText } from 'lucide-react'

const documents = [
  ['Project Brochure', 'PDF · 4.2 MB'],
  ['RERA Registration', 'PDF · 1.1 MB'],
  ['Approvals & NOCs', 'PDF · 2.3 MB'],
  ['Payment Plan', 'PDF · 900 KB'],
  ['Legal Documents', 'PDF · 3.5 MB'],
]

export default function ProjectDocuments() {
  return <section className="v2-documents-section v2-section" id="documents">
    <div className="v2-section-heading v2-section-heading-row v2-documents-heading"><h2>Project Documents</h2><a className="v2-section-action" href="#investment-details">Download All <ArrowRight size={15}/></a></div>
    <div className="v2-documents-row">{documents.map(([name, metadata]) => <article className="v2-document-tile" key={name}><span className="v2-document-icon"><FileText size={19}/></span><span className="v2-document-copy"><b>{name}</b><small>{metadata}</small></span><a href="#investment-details" aria-label={`Request ${name}`} title={`Request ${name}`}><Download size={15}/></a></article>)}</div>
  </section>
}