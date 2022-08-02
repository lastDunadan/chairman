import { createPortal } from 'react-dom'
import style from './SkillBoxModal.module.css'

const MainModal = ({name, onClose}) => {

  return (
    <div className={style.backdrop}>
      <div className={style.modalInnerBox}>
        <p>{name}</p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  )
}

const SkillBoxModal = ({nameOne, onClose}) => {
    return (
      <>
        {createPortal(<MainModal name={nameOne} onClose={onClose}/>, document.getElementById('modal-root'))}
      </>
    )
}

export default SkillBoxModal;
