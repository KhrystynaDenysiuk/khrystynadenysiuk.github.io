import s from './Info.module.scss';

const Info = ({ label, value }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.label}>{label}</p>
      <span className={s.value}>{value}</span>
    </div>
  )
}

export default Info;
