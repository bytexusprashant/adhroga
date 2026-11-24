import { ArrowRight, Building2, ChevronDown, House, Landmark, Maximize, Minus, Plus, Search, Trees } from 'lucide-react'

export default function ExploreSection({ Placeholder, filtered, mapMode, projects, scrollTo, search, setMapMode, setSearch, setSort, setStatus, setType, setZoom, sort, status, type, zoom }) {
  return <section className="explore-section" id="opportunities">
    <div className="section-heading light-heading">
      <div><div className="eyebrow">FIND OPPORTUNITIES ON MAP</div><h2>Explore Our Projects</h2><p>Navigate the map to discover our real estate investment opportunities. Use filters to view projects by status or type, click on a location to see project details and get directions.</p></div>
      <label className="search-box"><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search city, project or location"/><Search size={17}/></label>
    </div>
    <div className="explore-layout">
      <aside className="filters">
        <div className="filter-group"><h4>Project Status</h4>{['All Projects', 'Ongoing', 'Completed', 'Upcoming'].map(value => <label key={value} className="check-row"><input type="radio" name="status" checked={status === value} onChange={() => setStatus(value)}/><span className={`status-dot ${value.toLowerCase().replace(' ', '-')}`}/>{value}</label>)}</div>
        <div className="filter-group"><h4>Project Type</h4>{['All Types', 'Residential', 'Commercial', 'Land', 'Mixed Use'].map(value => <label key={value} className="check-row"><input type="radio" name="type" checked={type === value} onChange={() => setType(value)}/>{value !== 'All Types' && <span className="type-mini">{value === 'Residential' ? <House size={13}/> : value === 'Commercial' ? <Building2 size={13}/> : value === 'Land' ? <Trees size={13}/> : <Landmark size={13}/>}</span>}{value}</label>)}</div>
        <button className="reset" onClick={() => { setStatus('All Projects'); setType('All Types'); setSearch('') }}>Reset Filters</button>
      </aside>
      <div className={`map-panel ${mapMode === 'Satellite' ? 'satellite' : ''}`}>
        <div className="map-controls"><button className={mapMode === 'Map' ? 'selected' : ''} onClick={() => setMapMode('Map')}>Map</button><button className={mapMode === 'Satellite' ? 'selected' : ''} onClick={() => setMapMode('Satellite')}>Satellite</button></div>
        <div className="map-terrain" style={{ transform: `scale(${zoom})` }}>
          <iframe className="map-frame" title="Map of real estate opportunities across India" src="https://www.openstreetmap.org/export/embed.html?bbox=68.0%2C6.0%2C90.0%2C36.0&layer=mapnik" loading="lazy" />
          {[['39%', '21%', '1'], ['42%', '28%', '2'], ['44%', '79%', '3'], ['48%', '64%', '4'], ['35%', '33%', '5'], ['27%', '62%', '6']].map(([left, top, number]) => <button key={number} className={`map-pin pin-${number}`} style={{ left, top }} onClick={() => { setSearch(projects[(Number(number) - 1) % projects.length].name); document.getElementById('project-list')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) }}><span>{number}</span></button>)}
        </div>
        <button className="map-fullscreen" aria-label="Expand map"><Maximize size={17}/></button><div className="zoom-controls"><button onClick={() => setZoom(Math.min(zoom + 0.2, 1.8))}><Plus size={17}/></button><button onClick={() => setZoom(Math.max(zoom - 0.2, 0.8))}><Minus size={17}/></button></div><div className="map-credit">Map illustration · India</div>
      </div>
      <aside className="project-list" id="project-list"><div className="list-heading"><strong>Projects ({filtered.length})</strong><label><select value={sort} onChange={event => setSort(event.target.value)}><option>Recently Added</option><option>Name A–Z</option></select><ChevronDown size={13}/></label></div>
        {filtered.length ? [...filtered].sort((a, b) => sort === 'Name A–Z' ? a.name.localeCompare(b.name) : 0).slice(0, 4).map(project => <button className="mini-project" key={project.name} onClick={() => scrollTo('featured')}><Placeholder className="mini-thumb" label={project.name}/><span className="mini-info"><em className={`pill ${project.status.toLowerCase()}`}>{project.status}</em><b>{project.name}</b><small>{project.city}</small><small>{project.type} · {project.price}</small></span><ArrowRight size={14}/></button>) : <div className="empty-state">No projects match those filters.</div>}
      </aside>
    </div>
  </section>
}