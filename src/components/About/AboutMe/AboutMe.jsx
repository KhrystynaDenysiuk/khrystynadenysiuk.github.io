import s from './AboutMe.module.scss';
import InfoList from './InfoList/InfoList';
import Wrapper from '../../common/Wrapper/Wrapper';

const AboutMe = () => (
  <div className={s.aboutMe}>
    <Wrapper title={<>About <span>Me</span></>}>
      <div className={s.content}>
        <div className={s.description}>
          <p>
            I am a front-end developer. I chose this area for my further
            development, because IT is a world in which there is everything that
            suits me: rapid development, interesting projects and constant
            communication. I am a quick learner, take criticism objectively and
            appreciate it. With me in the team, you will get a person who
            appreciates the result, knows what he is striving for, and most of all
            wants development.
          </p>
        </div>
        <InfoList />
      </div>
    </Wrapper>
  </div>
)

export default AboutMe