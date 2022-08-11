import style from './Headline.module.scss'
import Contact from "../Contact/Contact";

const Headline = ({children}) => (
  <div className={style.headlineContainer}>
    <h1 className={style.headline}>{children}</h1>
    <Contact />
  </div>
)

export default Headline;
