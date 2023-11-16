import { Link } from "react-router-dom";
import s from './Menu.module.scss'

const items = [
  {
    href: '/',
    className: 'fa fa-user',
    lable: 'ABOUT'
  },
  {
    href: '/works',
    className: 'fa fa-paint-brush',
    lable: 'WORKS'
  },
  {
    href: '/contact',
    className: 'fa fa-at',
    lable: 'CONTACT'
  },
]

const Menu = () => {
  return (
    <div className={s.menu}>
      <div className={s.menuList}>
        <ul>
          {items.map((i, idx) => (
          <li key={idx}>
            <Link to={i.href}>
              <i className={i.className} aria-hidden="true"></i>
              <span>{i.lable}</span>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu