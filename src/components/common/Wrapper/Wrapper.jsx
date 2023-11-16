import s from './Wrapper.module.scss';

const Wrapper = ({ title, children }) => (
  <div className={s.wrapper}>
    <header><h4>{title}</h4></header>
    {children}
  </div>
)

export default Wrapper