import { createPortal } from 'react-dom'
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
          <div className="skillContainer__icons">

          </div>
          <div className="skillContainer__description">
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
