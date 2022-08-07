import {useEffect, useRef} from "react";
import style from './Contact.module.scss'
import {gsap} from "gsap";

const Contact = () => {

  const icons = {
    social: useRef(),
    repo: useRef()
  }

  useEffect(() => {
    const hoverAnimation = (iconToAnimate) => {
      iconToAnimate.addEventListener('mouseover', () => {
        gsap.fromTo(iconToAnimate,
          {
            rotateY: 0
          },
          {
            rotateY: 360,
            duration: 2
          }
        );
      })
    }

    hoverAnimation(icons.social.current);
    hoverAnimation(icons.repo.current);
  }, []);

  return (
    <div className={style.contact}>
      <a
        href="https://www.linkedin.com/in/pawel-modzelewski/"
        alt="Linked In"
        target="_blank"
      >
        <img src="/img/linkedin.png" ref={icons.social}/>
      </a>
      <a href="https://github.com/lastDunadan"
         alt="Linked In"
         target="_blank"
      >
        <img src="/img/github.png" ref={icons.repo}/>
      </a>
    </div>
  )
}

export default Contact;