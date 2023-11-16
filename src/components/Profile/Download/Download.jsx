import { Link } from "react-router-dom";
import s from './Download.module.scss';
import ResumePDF from './Khrystyna Denysiuk.pdf';

const Download = () => {
  return (
    <div className={s.download}>
      <a href={ResumePDF} target='_blank'>Download my CV</a>
      <Link to='/contact'>Contact Me</Link>
    </div>
  )
}

export default Download