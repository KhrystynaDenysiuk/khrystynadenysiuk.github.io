import s from './Links.module.scss'

const links = [
  {
    href: 'https://www.instagram.com/khrystyna_rolska/',
    className: 'fa fa-instagram'
  },
  {
    href: 'https://www.linkedin.com/in/khrystyna-rolska-309483222/',
    className: 'fa fa-linkedin'
  },
  {
    href: 'https://github.com/khrystynarolska',
    className: 'fa fa-github'
  }
]

const Links = () => {
  return (
    <div className={s.links}>
      <ul>
        {links.map((i, idx) => (
          <li key={idx}>
            <a href={i.href} target='_blank'>
              <i className={i.className} aria-hidden="true"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Links