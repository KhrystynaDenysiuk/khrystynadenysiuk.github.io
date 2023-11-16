import s from './Works.module.scss';
import Wrapper from '../common/Wrapper/Wrapper';
import Projects from './Projects/Projects';

const Works = () => (
  <div className={s.works}>
    <Wrapper title={<>My <span>portfolio</span></>}>
      <div className={s.content}>
        <p>Here you can see my projects. Also you can follow my activities in my 
          <a href="https://github.com/KhrystynaDenysiuk" target='_blank'> GITHUB</a>
        </p>
        <Projects />
      </div>
    </Wrapper>
  </div>
)

export default Works