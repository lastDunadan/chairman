import {useState} from "react";
import style from './SkillBox.module.scss'
import SkillBoxModal from "../SkillBoxModal/SkillBoxModal";

const SkillBox = ({skillOne, skillTwo, skillThree, iconOne, iconTwo, iconThree, intro, contentOne, contentTwo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className={style.skillBox} onClick={openModal}>
        <div>
          {skillOne}
        </div>
        {(skillTwo) && (<div>{skillTwo}</div>)}
        {(skillThree) && (<div>{skillThree}</div>)}
      </div>
      {(isModalOpen) && (
        <SkillBoxModal
          skillOne={skillOne} skillTwo={skillTwo} skillThree={skillThree}
          iconOne={iconOne} iconTwo={iconTwo} iconThree={iconThree}
          intro={intro} contentOne={contentOne} contentTwo={contentTwo}
          closeAction={closeModal}
        />
      )}
    </>
  )

}

export default SkillBox;
