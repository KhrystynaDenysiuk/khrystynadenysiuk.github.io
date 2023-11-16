import s from './About.module.scss';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Interests from './Interests/Interests';

const About = () => (
  <div className={s.about}>
    <AboutMe />
    <Skills />
    <Education />
    <Experience />
    <Interests />
  </div>
)

export default About