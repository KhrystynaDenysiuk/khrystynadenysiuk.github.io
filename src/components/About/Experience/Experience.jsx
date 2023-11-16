import s from './Experience.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';

const experience = [
  {
    companyТame: '"HiWeber", Kyiv',
    position: 'Front-end Developer',
    workPeriod: 'MAR 2022 – OCT 2023'
  }
]

const Experience = () => {
  return (
    <div className={s.experience}>
      <Wrapper title={<>My <span>education</span></>}>
        {experience.map((i, idx) => (
          <div className={s.content} key={idx}>
            <h4>{i.companyТame}</h4>
            <p>{i.position}</p>
            <span>{i.workPeriod}</span>
            <h5>
              I have been working as front-End developer. I have developed
              VueJS-project from scratch. I have been using technologies like
              HTML/SCSS, Javascript, Vue, Vuex, Vue Router. Writing easy tests with
              Cypress.
            </h5>
          </div>
        ))}
      </Wrapper>
    </div>
  )
}

export default Experience