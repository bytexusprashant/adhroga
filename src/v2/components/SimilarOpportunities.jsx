import { ArrowRight, MapPin } from 'lucide-react'

export default function SimilarOpportunities({ opportunities, searchTerm }) {
  const matchingOpportunities = opportunities.filter(project =>
    `${project.name} ${project.city} ${project.type}`.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return <section className="v2-similar-section v2-section" id="similar">
    <div className="v2-section-heading v2-section-heading-row"><h2>Similar Investment Opportunities</h2><a className="v2-section-action" href="/v1#opportunities">View All Opportunities <ArrowRight size={15}/></a></div>
    <div className="v2-related-grid">{matchingOpportunities.length ? matchingOpportunities.map(project => <article className="v2-related-card" key={project.name}><div className="v2-related-image"><img src={project.image} alt={`${project.name} project`} loading="lazy"/></div><div className="v2-related-body"><small>{project.city}</small><span className={`v2-related-status ${project.status === 'Upcoming' ? 'v2-related-upcoming' : ''}`}>{project.status}</span><h3>{project.name}</h3><p>{project.type}</p><div className="v2-related-meta"><span>{project.price}</span><span>{project.term}</span></div></div></article>) : <p className="v2-no-results">No projects match “{searchTerm}”.</p>}</div>
  </section>
}