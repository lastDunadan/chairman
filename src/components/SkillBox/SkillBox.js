import style from './SkillBox.module.css'
import SkillBoxModal from "../SkillBoxModal/SkillBoxModal";

const SkillBox = ({nameOne, nameTwo, nameThree, onClick}) => {

  return (
    <div className={style.skillBox} onClick={onClick}>
      <div className={style.name}>
        {nameOne}
      </div>
      {(nameTwo) && (<div className={style.name}>{nameTwo}</div>)}
      {(nameThree) && (<div className={style.name}>{nameThree}</div>)}
      <SkillBoxModal
        nameOne={nameOne}
      />
    </div>
  )
}

export default SkillBox;