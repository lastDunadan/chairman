import {useEffect, useRef} from "react";
import style from './Contact.module.scss'
import {gsap} from "gsap";

const Contact = () => {

  const icons = {
    social: useRef(),
    repo: useRef()
  }

  useEffect(() => {

    const hoverAnimation = (event) => {
      gsap.fromTo(event.target,
        {
          rotateY: 0
        },
        {
          rotateY: 360,
          duration: 2
        }
      );
    }

    icons.social.current.addEventListener('mouseover', hoverAnimation)
    icons.repo.current.addEventListener('mouseover', hoverAnimation)

    return () => {
      icons.social.current.removeEventListener('mouseover', hoverAnimation)
      icons.repo.current.removeEventListener('mouseover', hoverAnimation)
    }
  }, []);

  return (
    <div className={style.contact}>
      <a
        href="https://www.linkedin.com/in/pawel-modzelewski/"
        alt="Linked In"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/img/linkedin.png" ref={icons.social} alt="linkedin"/>
      </a>
      <a href="https://github.com/lastDunadan"
         alt="Linked In"
         target="_blank"
         rel="noreferrer"
      >
        <img src="/img/github.png" ref={icons.repo} alt="github"/>
      </a>
    </div>
  )
}

export default Contact;