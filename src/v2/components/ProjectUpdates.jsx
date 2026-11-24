import { ArrowRight, ArrowUpRight } from "lucide-react";

const updates = [
  {
    date: "12 Oct 2025",
    title: "Construction Progress – Tower A",
    description:
      "Foundation work for Tower A completed. Structural work in progress.",
    type: "Video",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "28 Sep 2025",
    title: "Site Development Update",
    description:
      "Site development and infrastructure work progressing as per schedule.",
    type: "Image",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "15 Aug 2025",
    title: "Model Apartment Ready",
    description:
      "Model apartment is now ready for visitors. Experience the quality and design firsthand.",
    type: "Image",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "20 Jul 2025",
    title: "Project Launch Event",
    description:
      "Successful project launch event with an encouraging response from investors.",
    type: "Image",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80",
  },
];

export default function ProjectUpdates() {
  return (
    <section className="v2-updates-section v2-section" id="updates">
      <div className="v2-section-heading v2-section-heading-row v2-updates-heading">
        <h2>Project Updates</h2>
        <a className="v2-section-action" href="#updates">
          View All Updates <ArrowRight size={15} />
        </a>
      </div>
      <div className="v2-updates-grid">
        {updates.map((update) => (
          <article className="v2-update-card" key={update.title}>
            <div className="v2-update-image">
              <img src={update.image} alt={update.title} loading="lazy" />
              <span className="v2-update-type">
                <ArrowUpRight size={13} />
              </span>
            </div>
            <div className="v2-update-card-body">
              <time>{update.date}</time>
              <div className="v2-update-title-row">
                <h3>{update.title}</h3>
                {/* <span>{update.type}</span> */}
              </div>
              <p>{update.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
