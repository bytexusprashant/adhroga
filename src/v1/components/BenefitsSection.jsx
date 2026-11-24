export default function BenefitsSection({ benefits }) {
  return (
    <section className="benefit-strip">
      {benefits.map(({ icon: Icon, title, text }) => (
        <article className="benefit" key={title}>
          <div className="benefit-icon"><Icon size={32} /></div>
          <div><h3 className="title">{title}</h3><p>{text}</p></div>
        </article>
      ))}
    </section>
  )
}