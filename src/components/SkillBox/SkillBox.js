import {useState} from "react";
import style from './SkillBox.module.scss'
import SkillBoxModal from "../SkillBoxModal/SkillBoxModal";

const SkillBox = ({skillOne, skillTwo, skillThree, iconOne, iconTwo, iconThree, intro, content, }) => {
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
        <div className={style.name}>
          {skillOne}
        </div>
        {(skillTwo) && (<div className={style.name}>{skillTwo}</div>)}
        {(skillThree) && (<div className={style.name}>{skillThree}</div>)}
      </div>
      {(isModalOpen) && (
        <SkillBoxModal
          skillOne={skillOne} skillTwo={skillTwo} skillThree={skillThree}
          iconOne={iconOne} iconTwo={iconTwo} iconThree={iconThree}
          intro={intro} content={content} closeAction={closeModal}
        />
      )}
    </>
  )

}

export default SkillBox;