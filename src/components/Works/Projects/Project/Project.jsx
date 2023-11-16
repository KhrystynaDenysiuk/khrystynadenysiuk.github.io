import s from './Project.module.scss'

const Project = ({ src, label, technologies, value, href }) => {
  return (
    <div className={s.project}>
      <div className={s.image}>
        <img src={src} alt="" />
      </div>
      <div className={s.name}>
        <h2>{label}</h2>
        <p>{technologies}</p>
        <div className={s.info}>
          <p>{value}</p>
          <a href={href} target='_blank'>DEMO</a>
        </div>
      </div>
    </div>
  )
}

export default Project