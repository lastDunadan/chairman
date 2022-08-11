import { useEffect } from "react";
import {gsap} from "gsap";
import skillBoxes from '../../data/skillboxData'
import Headline from "../Headline/Headline";
import SkillBox from "../SkillBox/SkillBox";
import style from './MainStage.module.scss';

const MainStage = () => {

  useEffect(() => {
    gsap.fromTo(".animationLayer",
      {
        opacity: 0,
        rotateY: -180,
      },{
        opacity: 1,
        rotateY: 0,
        delay: 1,
        stagger: 0.25
      });
    }, []);

  return (
    <section className={style.mainStage}>
      <Headline>Pawel Modzelewski</Headline>
      <div className={style.skillBoxContainer}>
        {
          skillBoxes.map((box) => {
            return (
              <div className="animationLayer" key={box.skillNameOne}>
                <SkillBox
                  skillOne={box.skillNameOne}
                  skillTwo={box.skillNameTwo}
                  skillThree={box.skillNameThree}
                  intro={box.introText}
                  contentOne={box.mainParagraph}
                  contentTwo={box.secondaryParagraph}
                  iconOne={box.iconOne}
                  iconTwo={box.iconTwo}
                  iconThree={box.iconThree}
                />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default MainStage;
