import style from './Headline.module.scss'
import Contact from "../Contact/Contact";

const Headline = ({headlineContent}) => (
  <div className={style.headlineContainer}>
    <h1 className={style.headline}>{headlineContent}</h1>
    <Contact />
  </div>
)

export default Headline;
