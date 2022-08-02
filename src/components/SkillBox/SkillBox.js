import {useState} from "react";
import style from './SkillBox.module.css'
import SkillBoxModal from "../SkillBoxModal/SkillBoxModal";

const SkillBox = ({nameOne, nameTwo, nameThree}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    console.log('modal should open')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log('modal should close')
    setIsModalOpen(false)
  }

  return (
    <>
      <div className={style.skillBox} onClick={openModal}>
        <div className={style.name}>
          {nameOne}
        </div>
        {(nameTwo) && (<div className={style.name}>{nameTwo}</div>)}
        {(nameThree) && (<div className={style.name}>{nameThree}</div>)}
      </div>
      {(isModalOpen) && (<SkillBoxModal nameOne={nameOne} onClose={closeModal}/>)}
    </>
  )
}

export default SkillBox;