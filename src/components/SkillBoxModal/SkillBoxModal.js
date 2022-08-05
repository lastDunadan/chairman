import {useState, useEffect, useRef} from "react";
import {createPortal} from 'react-dom'
import Skill from '../Skill/Skill'
import style from './SkillBoxModal.module.scss'
import {gsap} from "gsap";

const MainModal = ({
     skillOne, skillTwo, skillThree,
     iconOne, iconTwo, iconThree,
     intro, contentOne, contentTwo,
     closeAction
  }) => {

  const [modalReady, setModalReady] = useState(true)

  const outerModal = useRef()
  const innerModal = useRef()

  useEffect(() => {
    gsap.fromTo(innerModal.current,
      {
        opacity: 0,
        y: -200
      }, {
        opacity: 1,
        y: 0
      }
    );
  }, []);

  useEffect(() => {
    if (!modalReady) {
      gsap.to(innerModal.current,
        {
          duration: 0.45,
          opacity: 0
        }
      );
      gsap.to(outerModal.current,
        {
          duration: 0.45,
          opacity: 0
        }
      );
    }
  }, [modalReady])

  const hideModal = () => {
    setModalReady(false);
    setTimeout(closeAction, 500)
  }

  return (
    <>
      <div className={style.backdrop} onClick={hideModal} ref={outerModal}>
      </div>
      <div className={style.modalInnerBox} ref={innerModal}>
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
            {(contentOne) && (<p>{contentOne}</p>)}
            {(contentTwo) && (<p>{contentTwo}</p>)}
          </div>
        </div>
        <div className={style.skillFooter}>
          <button
            className={style.skillFooter__closeButton}
            onClick={hideModal}
          >
            Back
          </button>
        </div>
      </div>
    </>
  )
}

const SkillBoxModal = ({
     skillOne, skillTwo, skillThree,
     iconOne, iconTwo, iconThree,
     intro, contentOne, contentTwo,
     closeAction
  }) => {
  return (
    <>
      {createPortal(<MainModal
          skillOne={skillOne} skillTwo={skillTwo} skillThree={skillThree}
          iconOne={iconOne} iconTwo={iconTwo} iconThree={iconThree}
          intro={intro} contentOne={contentOne} contentTwo={contentTwo}
          closeAction={closeAction}
        />,
        document.getElementById('modal-root'))}
    </>
  )
}

export default SkillBoxModal;
