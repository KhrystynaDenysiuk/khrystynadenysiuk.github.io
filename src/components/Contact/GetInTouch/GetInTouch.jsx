import s from './GetInTouch.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import ContactMeList from './ContactMeList/ContactMeList';
import img from './assets/ukraine.png'

const GetInTouch = () => {
  return (
    <div className={s.getInTouch}>
      <Wrapper title={<>Get <span>in Touch</span></>}>
        <div className={s.content}>
          <p>I am open to conversations, requests and suggestions!</p>
          <ContactMeList />
        </div>
        <div className={s.map}>
          <img src={img} alt="" />
        </div>
      </Wrapper>
    </div>
  )
}

export default GetInTouch