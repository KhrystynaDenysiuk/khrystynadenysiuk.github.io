import Info from '../../../common/Info/Info';
import s from './ContactMeList.module.scss';

const contactMeList = [
  {
    label: 'Сity',
    value: 'Kyiv, Ukraine'
  },
  {
    label: 'Email',
    value: 'khrystyna_denysiuk@ukr.net'
  },
  {
    label: 'Phone',
    value: '+38 (097) 00 79 067'
  },
]

const ContactMeList = () => (
  <div className={s.contactMeList}>
    <div className={s.info}>
      {contactMeList.map((i, idx) => (
        <Info key={idx} label={i.label} value={i.value} />
      ))}
    </div>
  </div>
)

export default ContactMeList