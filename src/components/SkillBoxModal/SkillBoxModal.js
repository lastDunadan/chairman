import { createPortal } from 'react-dom'
import style from './SkillBoxModal.module.css'

const MainModal = ({name}) => (
  <div className={style.backdrop}>
    <div className={style.modalInnerBox}>
      {name}
    </div>
  </div>
)

const SkillBoxModal = ({nameOne}) => {
    return (
      <>
        {createPortal(<MainModal name={nameOne}/>, document.getElementById('modal-root'))}
      </>
    )
}

export default SkillBoxModal;