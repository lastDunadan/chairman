import { createPortal } from 'react-dom'
import Skill from '../Skill/Skill'
import style from './SkillBoxModal.module.scss'

const MainModal = ({skillOne, skillTwo, skillThree, iconOne, iconTwo, iconThree, intro, content, closeAction}) => {

  return (
    <>
      <div className={style.backdrop} onClick={closeAction}>close>
      </div>
      <div className={style.modalInnerBox}>
        <div className={style.skillHeadline}>
          <h2 className={style.skillHeadline__headline}>
            <span>
              {skillOne} {(skillTwo) && skillTwo} {(skillThree) && skillThree}
            </span>
          </h2>
        </div>
        <div className={style.skillContainer}>
          <div className={style.skillContainer__icons}>
            <Skill iconData={iconOne}/>
            {(iconTwo) && <Skill iconData={iconTwo}/>}
            {(iconThree) && <Skill iconData={iconThree}/>}
          </div>
          <div className={style.skillContainer__description}>
            <p>{intro}</p>
            {(content) && (<p>{content}</p>)}
          </div>
        </div>
        <div className={style.skillFooter}>
          <button
            className={style.skillFooter__closeButton}
            onClick={closeAction}
          >
            Back
          </button>
        </div>
      </div>
    </>
  )
}

const SkillBoxModal = ({skillOne, skillTwo, skillThree, iconOne, iconTwo, iconThree, intro, content, closeAction}) => {
    return (
      <>
        {createPortal(<MainModal
          skillOne={skillOne} skillTwo={skillTwo} skillThree={skillThree}
          iconOne={iconOne} iconTwo={iconTwo} iconThree={iconThree}
          intro={intro} content={content} closeAction={closeAction}
        />,
          document.getElementById('modal-root'))}
      </>
    )
}

export default SkillBoxModal;
