import s from './Skills.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import SkillsItem from './SkillsItem/SkillsItem';
import Technologies from './Technologies/Technologies';

const skills = ['HTML', 'CSS', 'JAVA SCRIPT', 'VUE']

const Skills = () => (
  <div className={s.skills}>
    <Wrapper title={<>Proffesional <span>skills</span></>}>
      <div className={s.content}>
      {skills.map((i, idx) => (
        <SkillsItem key={idx} label={i} />
      ))}
      </div>
      <p>Also I use such technologies:</p>
      <Technologies />
    </Wrapper>
  </div>
)

export default Skills