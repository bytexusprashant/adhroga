const propertyImages = {
  'Modern luxury real estate': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
  'The Green Estate': 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
  'Skyline Heights': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  'Maple Residences': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
  'Business Park': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  'The Aravalli Enclave': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'Palm Grove Villas': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
  'Luxury property at sunset': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
}

export default function Placeholder({ className = '', label = 'Property image' }) {
  const image = propertyImages[label]
  return <div className={`image-placeholder ${image ? 'has-photo' : ''} ${className}`} role="img" aria-label={label}>
    {image && <img className="property-photo" src={image} alt="" loading="lazy" />}
    <div className="placeholder-sky" />
    <div className="placeholder-building b1" /><div className="placeholder-building b2" /><div className="placeholder-building b3" />
    <div className="placeholder-ground" />
    <span className="placeholder-label">{label}</span>
  </div>
}