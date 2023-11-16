import s from './SkillsItem.module.scss';

const SkillsItem = ({ label }) => (
  <div className={s.skillsItem}>
    <span>{label}</span>
  </div>
)

export default SkillsItem