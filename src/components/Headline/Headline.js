import style from './Headline.module.css'

const Headline = ({headlineContent}) => (
  <div className={style.headlineContainer}>
    <h1 className={style.headline}>{headlineContent}</h1>
  </div>
)

export default Headline;