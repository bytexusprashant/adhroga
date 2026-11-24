const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'location', label: 'Location' },
  { id: 'investment-details', label: 'Investment Details' },
  { id: 'updates', label: 'Updates' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'documents', label: 'Documents' },
  { id: 'faqs', label: 'FAQs' },
]

export default function ProjectSectionNav() {
  return <nav className="v2-section-nav" aria-label="Project sections">
    {sections.map(section => <a className="v2-section-link" key={section.id} href={`#${section.id}`}>{section.label}</a>)}
  </nav>
}