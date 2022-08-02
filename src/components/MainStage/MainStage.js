import skillBoxes from '../../data/skillboxData'
import Headline from "../Headline/Headline";
import SkillBox from "../SkillBox/SkillBox";
import style from './MainStage.module.scss';

const MainStage = () => {

  return (
    <section className={style.mainStage}>
      <Headline headlineContent='Pawel Modzelewski' />
      <div className={style.skillBoxContainer}>
        {
          skillBoxes.map((box) => {
            return (
              <SkillBox
                key={box.skillNameOne}
                skillOne={box.skillNameOne}
                skillTwo={box.skillNameTwo}
                skillThree={box.skillNameThree}
                intro={box.introText}
                content={box.contentText}
                iconOne={box.iconOne}
                iconTwo={box.iconTwo}
                iconThree={box.iconThree}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default MainStage;