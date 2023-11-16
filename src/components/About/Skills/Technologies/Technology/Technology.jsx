import s from './Technology.module.scss';

const Technology = ({ label }) => (
  <div className={s.tech}>
    <span>{label}</span>
  </div>
)

export default Technology