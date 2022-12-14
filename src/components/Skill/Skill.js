import style from './Skill.module.scss'

const Skill = ({iconData}) => {

  const starSorter = () => {
    switch (iconData.stars) {
      case 0:
        return (<span>&#x2606;&#x2606;&#x2606;&#x2606;&#x2606;</span>)
      case 1:
        return (<span>&#x2605;&#x2606;&#x2606;&#x2606;&#x2606;</span>)
      case 2:
        return (<span>&#x2605;&#x2605;&#x2606;&#x2606;&#x2606;</span>)
      case 3:
        return (<span>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</span>)
      case 4:
        return (<span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;</span>)
      case 5:
      default:
        return (<span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>)
    }
  }

  return (
    <div className={style.skillFrame}>
      <div className={style.skillName}>
        {iconData.name}
      </div>
      <img src={iconData.picture} alt=""/>
      <div className={style.stars}>
        Mastery Level
        <div className={style.stars__symbols}>
          {starSorter()}
        </div>
      </div>
    </div>
  )
}

export default Skill;
