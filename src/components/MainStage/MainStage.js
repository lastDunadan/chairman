import Headline from "../Headline/Headline";
import SkillBox from "../SkillBox/SkillBox";
import style from './MainStage.module.css';

const skillBoxes = [
  {name: 'HTML', icoOne: '', text: 'Lorem Ipsum Sit'},
  {name: 'CSS', nameTwo: 'SCSS'},
  {name: 'JS'},
  {name: 'REACT'},
  {name: 'GSAP', nameTwo: 'jQUERY'},
  {name: 'GIT',  nameTwo: 'GULP'},
  {name: 'JIRA'},
  {name: 'Photoshop'},
  {name: 'Software /', nameTwo: 'Hardware'},
  {name: 'Soft skills'},
  {name: 'Experience /', nameTwo: 'Education'}

];

const MainStage = () => {

  return (
    <section className={style.mainStage}>
      <Headline headlineContent='Pawel Modzelewski' />
      <div className={style.skillBoxContainer}>
        {
          skillBoxes.map((box) => {
            return (
              <SkillBox
                key={box.name}
                nameOne={box.name}
                nameTwo={box.nameTwo}
                nameThree={box.nameThree}
                text={box.text}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default MainStage;