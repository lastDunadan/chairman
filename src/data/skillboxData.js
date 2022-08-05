const skillBoxes = [
  // SKILL HTML/CSS
  {
    skillNameOne: "HTML",
    skillNameTwo: "CSS/SCSS",
    skillNameThree: null,
    introText: "There is no going around the basics. Both HTML and CSS are core building blocks of contemporary websites. And they have their role when it comes to creating good interfaces.",
    mainParagraph: "I've been using both technologies for many years now. It started in my twenties as a hobby. Back then I've made my first websites for church I was attending to and for one NGO. That's how it all started. Now, after more than twelve years of professional and semi-professional experience I had a chance to work for more demanding clients. Including really big brands like De'Longhi, Braun, Kenwood, Supermarket OBI, Jordan, Procter and Gamble and many, many more. My skillset also includes SCSS/SASS extension languages for CSS.",
    secondaryParagraph: null,
    iconOne: {name: "HTML", picture: "/img/skill-html.png", stars: 5},
    iconTwo: {name: "CSS", picture: "./img/skill-css.png", stars: 5},
    iconThree: {name: "SCSS/SASS", picture: "/img/skill-scss.png", stars: 4}
  },
  // SKILL JS
  {
    skillNameOne: "JS",
    skillNameTwo: "JQUERY",
    skillNameThree: "GSAP",
    introText: "Javascript is where the fun begins. You can't even think about a good website without good old JS working in the background. And with it being the most used programming language in the world, knowledge of JS is essential for any web developer.",
    mainParagraph: "I must admit: I am totally and irreversibly in love with Javascript. It may even make me a nerd of sort but that is OK - I am who I am. My experience with this language spans back to year 2018. For me it was a time of rapid skill acquisition as I've just moved back from Liverpool to Warsaw and was desperate to get a new job. I succeeded. Both in getting basics of JS and jQuery and in getting that job. After few years my knowledge of JS expanded, I've tested several libraries to learn animations and choose GSAP as one of the best. Today I use only ES6 standards and can proudly call myself proficient.",
    secondaryParagraph: null,
    iconOne: {name: "JS", picture: "/img/skill-js.png", stars: 4},
    iconTwo: {name: "JQUERY", picture: "/img/skill-jquery.png", stars: 3},
    iconThree: {name: "GSAP", picture: "/img/skill-gsap.png", stars: 3}
  },
  // SKILL REACT
  {
    skillNameOne: "REACT",
    skillNameTwo: null,
    skillNameThree: null,
    introText: "React is... awesome! Though I've tried to get into this library several times my first big breakthrough was in the beginning of 2022. I am still learning this one but I must say: I like it very much. I think it may become my primary programming language as it gives me much more satisfaction than Javascript. So I may have only basic level skills now, but not for long - watch me.",
    mainParagraph: "And you? How do you find my React skills? After all this website is made in React.",
    secondaryParagraph: null,
    iconOne: {name: "REACT", picture: "/img/skill-react.png", stars: 2},
    iconTwo: null,
    iconThree: null
  },
  // SKILL GIT/GULP
  {
    skillNameOne: "GIT",
    skillNameTwo: "GULP",
    skillNameThree: null,
    introText: "How about some tools to make coding more efficient? My first choice is GIT (GitLab, Github, Bitbucket) to control versions of my code. And GULP as a task runner.",
    mainParagraph: "Though the first one is popular and kind of essential, the other is not. Some prefer Webpack but I find it too tedious and stick to task runner that makes my life much easier. One configuration file lasts years of projects. It is fast, it is easy, it is just GOOD. But yes - I can use Webpack.",
    secondaryParagraph: null,
    iconOne: {name: "GIT", picture: "/img/skill-git.png", stars: 4},
    iconTwo: {name: "GULP", picture: "/img/skill-gulp.png", stars: 4},
    iconThree: null
  },
  // SKILL PHOTOSHOP
  {
    skillNameOne: "PHOTOSHOP",
    skillNameTwo: null,
    skillNameThree: null,
    introText: "Photoshop was one of the first programs I've mastered for professional purposes. But I've chosen to code after all.",
    mainParagraph: "Yet still my skills in that regard are very high and I can easily compose landing page designs or other web creations. And I do that often. I flirt with solutions like Figma but honestly - one just can't master everything in given time. Therefore I stick to the Photoshop for design. And learn to code in free time.",
    secondaryParagraph: null,
    iconOne: {name: "Photoshop", picture: "/img/skill-photoshop.png", stars: 4},
    iconTwo: null,
    iconThree: null
  },
  // SKILL IDE
  {
    skillNameOne: "IDE",
    skillNameTwo: null,
    skillNameThree: null,
    introText: "Atom, Brackets, Sublime... even Dreamweaver. There were many IDEs in my career. But they've all lost to Visual Studio.",
    mainParagraph: "It was a revolution when I first used VS. Very responsive, light, fast and could do it all. We did many, many pages together. But then came another one... and with a force of a storm it revolutionized the  way that I write a code once more. WebStorm is my IDE of choice. It may not be as light as VS, but it can do even more than its Microsoft counterpart. And it is sexy as hell.",
    secondaryParagraph: null,
    iconOne: {name: "VISUAL STUDIO", picture: "/img/skill-vs.png", stars: 4},
    iconTwo: {name: "WEB STORM", picture: "/img/skill-webstorm.png", stars: 4},
    iconThree: null
  },
  // SKILL Operating systems
  {
    skillNameOne: "OPERATING SYSTEMS",
    skillNameTwo: null,
    skillNameThree: null,
    introText: "Truth to be told I care less about an OS I use. I know all of them, I worked and played with all of them. And I do prefer UNIX based systems but I can deal with Windows too.",
    mainParagraph: "When I was a 14 years old kid I used to play pranks on my IT teachers by writing batch files for Windows. They were running on system startup and were displaying stupid error messages during boot sequence: 'ERROR: Mousepad Drivers were not found. Press any key to continue...' was my favorite. So yes - I've always known how to have fun with Windows. And I still do. But my first Linux (one of the Ubuntus) gave me so much more opportunities to configure things, meddle with settings and write even more funny shell scripts. I couldn't help falling in love. To this day Linux systems are my favorites. And the Mac OS? I find it pleasant for its linux-based file system and bash console. But despite these awesome features it is simply too strict and too boring.",
    secondaryParagraph: null,
    iconOne: {name: "WINDOWS", picture: "/img/skill-os-windows.png", stars: 5},
    iconTwo: {name: "MAC OS", picture: "/img/skill-os-mac.png", stars: 5},
    iconThree: {name: "LINUX", picture: "/img/skill-os-linux.png", stars: 5}
  },
  // SKILLS SOFT
  {
    skillNameOne: "SOFT SKILLS",
    skillNameTwo: null,
    skillNameThree: null,
    introText: "Aaahh... soft skills. Now the bragging will truly begin. I hope you will bear with me on this one.",
    mainParagraph: "I would say that communication is one of my biggest attributes. I do put a lot of care in forming statements that are clear and information-packed. And I am pretty good in effective communication with non-technical colleagues. My second best skill would be creativity. Both in brainstorming and in solo work I find it easy to think through many variants of given task and picking up the neatest solutions. And finally - teaching. This one may not be that obvious and not that common in frontend line of work. But I find a lot of satisfaction in helping others. And I am extremely patient and friendly what makes working with me easy for everyone.",
    secondaryParagraph: null,
    iconOne: {name: "COMMUNICATION", picture: "/img/soft-communication.png", stars: 5},
    iconTwo: {name: "CREATIVITY", picture: "/img/soft-creativity.png", stars: 5},
    iconThree: {name: "TEACHING", picture: "img/soft-teaching.png", stars: 4}
  },
  // EXPERIENCE
  {
    skillNameOne: "EDUCATION",
    skillNameTwo: "EXPERIENCE",
    skillNameThree: null,
    introText: "When it comes to my education I have a batchelor degree from University of Warsaw and a master degree from WSGE of Jozefów. My field was Education. And master thesis was about 'Impact of Open Source software and Open Culture on acquisition of knowledge and professional skills.'",
    mainParagraph: "My professional experience spans back to year 2017 when I was still in UK, working in Liverpool in a small ecommerce company. Back then I was responsible for writing eBay templates and maintaining Prestashop based online store. When I parted ways with that company I began my career as a freelancer. I was creating and maintaining several websites for small businesses run by polish emigrants. Most of them were WP or Joomla based. At the end of 2017 I've returned to Poland when I was hired by Performance Media - company that took me in with little experience I had and helped me to develop to the place where I am today.",
    secondaryParagraph: null,
    iconOne: {name: "EDUCATION", picture: "/img/soft-education.png", stars: 5},
    iconTwo: {name: "EXPERIENCE", picture: "/img/soft-experience.png", stars: 5},
    iconThree: null
  },
  // AFTER HOURS
  {
    skillNameOne: "AFTER HOURS",
    skillNameTwo: null,
    skillNameThree: null,
    introText: "I am a gamer. Proud member of 'PC Master Race'. Only console I tolerate is Switch. And that is because when I presented it to my wife she sunk into it and now I have peace. (I hope everyone knows that what I just wrote was a joke!). Every 2-3 years I build new system for myself. Last one was built for the premiere of Cyberpunk 2077 and now I am due to build a new one.",
    mainParagraph: "Another thing that I do in my free time is playing tabletop RPG games. I do like good RPG session. Traditionally I was a game master but that changed in the last few months when I became a player myself. My system of choice is Warhammer but I also love Savage Worlds (for its flexibility) and classic D&D.",
    secondaryParagraph: "Lastly I do enjoy good weather and closeness to nature. Hikes in mountains or deep woods, relaxing on sun-bathed meadow or exploring open-air museums (like villages or forts) are obligatory point during my every vacation.",
    iconOne: {name: "GAMER", picture: "/img/ah-gamer.png", stars: 5},
    iconTwo: {name: "RPG GEEK", picture: "/img/ah-rpg.png", stars: 4},
    iconThree: {name: "NATURE ENTHUSIAST", picture: "/img/ah-nature.png", stars: 3}
  }
];

export default skillBoxes;
