import { useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    title: 'Project Walkthrough (2:15 min)',
    type: 'Video',
    video: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85',
    title: 'Elevation View',
    type: 'Image',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
    title: 'Sample Apartment Interior',
    type: 'Image',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
    title: 'Amenities – Clubhouse',
    type: 'Image',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
    title: 'Landscape & Open Areas',
    type: 'Image',
  },
]

export default function ProjectGallery() {
  const galleryRef = useRef(null)

  const showNext = () => {
    const galleryCard = galleryRef.current?.querySelector('.v2-gallery-card')
    if (!galleryCard) return
    galleryRef.current.scrollBy({ left: galleryCard.getBoundingClientRect().width + 18, behavior: 'smooth' })
  }

  return <section className="v2-gallery-section v2-section" id="gallery">
    <div className="v2-section-heading v2-section-heading-row"><div><h2>Project Gallery</h2></div><a className="v2-directions-button" href="https://www.google.com/maps/dir/?api=1&destination=30.7046,76.7179" target="_blank" rel="noreferrer">Get Directions <ArrowRight size={17}/></a></div>
    <div className="v2-gallery-carousel">
      <div className="v2-gallery-track" ref={galleryRef}>
        {galleryItems.map(item => <article className="v2-gallery-card" key={item.title}>
          <div className="v2-gallery-media"><img src={item.src} alt={item.title} loading="lazy"/>{item.video && <span className="v2-gallery-play" aria-hidden="true"><Play size={24} fill="currentColor"/></span>}</div>
          <div className="v2-gallery-caption"><h3>{item.title}</h3><span>{item.type}</span></div>
        </article>)}
      </div>
      <button className="v2-gallery-next" type="button" aria-label="Show next gallery image" onClick={showNext}><ArrowRight size={23}/></button>
    </div>
  </section>
}