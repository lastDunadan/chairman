const skillBoxes = [
  // SKILL HTML
  {
    skillNameOne: 'HTML',
    skillNameTwo: 'CSS/SCSS',
    skillNameThree: null,
    introText: 'There is no going around the basics. Both HTML and CSS are core building blocks of contemporary websites. And they have their role when it comes to creating good interfaces.',
    contentText: "I've been using both technologies for many years now. It started in my twenties as a hobby. Back then I've made my first websites for church I was attending to and for one NGO. That's how it all started. Now, after more than twelve years of professional and semi-professional experience I had a chance to work for more demanding clients. Including really big brands like De'Longhi, Braun, Kenwood, Supermarket OBI, Jordan, Procter and Gamble and many, many more. My skillset also includes SCSS/SASS extension languages for CSS.",
    iconOne: {name: 'HTML', picture: '/img/skill-html.png', stars: 5},
    iconTwo: {name: 'CSS', picture: './img/skill-css.png', stars: 5},
    iconThree: {name: 'SCSS/SASS', picture: '/img/skill-scss.png', stars: 4}
  },
  // SKILL JS
  {
    skillNameOne: 'JS',
    skillNameTwo: 'JQUERY',
    skillNameThree: 'GSAP',
    introText: "Javascript is where the fun begins. You can't even think about a good website without good old JS working in the background. And with it being the most used programming language in the world, knowledge of JS is essential for any web developer.",
    contentText: "I must admit: I am totally and irreversably in love with Javascript. It may even make me a nerd of sort but that is OK - I am who I am. My experience with this language spans back to year 2018. For me it was a time of rapid skill aquisiton as I've just moved back from Liverpool to Warsaw and was desperate to get a new job. I succeeded. Both in getting basics of JS and jQuery and in getting that job. After few years my knowledge of JS expanded, I've tested several libraries to learn animations and choose GSAP as one of the best. Today I use only ES6 standards and can proudly call myself proficient.",
    iconOne: {name: 'JS', picture: '/img/skill-js.png', stars: 4},
    iconTwo: {name: 'JQUERY', picture: '/img/skill-jquery.png', stars: 3},
    iconThree: {name: 'GSAP', picture: '/img/skill-gsap.png', stars: 3}
  },
  // SKILL REACT
  {
    skillNameOne: 'REACT',
    skillNameTwo: null,
    skillNameThree: null,
    introText: "React is... awesome! Though I've tried to get into this library several times my first big breaktrough was in the begining of 2022. I am still learning this one but I must say: I like it very much. I think it may become my primary programming language as it gives me much more satisfaction than Javascript. So I may have only basic level skills now, but not for long - watch me.",
    contentText: "And you? How do you find my React skills? After all this website is made in React.",
    iconOne: {name: 'REACT', picture: '/img/skill-react.png', stars: 2},
    iconTwo: null,
    iconThree: null
  },
  // SKILL GIT/GULP
  {
    skillNameOne: 'GIT',
    skillNameTwo: 'GULP',
    skillNameThree: null,
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    iconOne: {name: 'GIT', picture: '/img/skill-git.png', stars: 4},
    iconTwo: {name: 'GULP', picture: '/img/skill-gulp.png', stars: 4},
    iconThree: null
  },
  // SKILL PHOTOSHOP
  {
    skillNameOne: 'PHOTOSHOP',
    skillNameTwo: null,
    skillNameThree: null,
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    iconOne: {name: 'Photoshop', picture: '/img/skill-photoshop.png', stars: 4},
    iconTwo: null,
    iconThree: null
  },
  // SKILL IDE
  {
    skillNameOne: 'IDE',
    skillNameTwo: null,
    skillNameThree: null,
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    iconOne: {name: 'VISUAL STUDIO', picture: '/img/skill-vs.png', stars: 4},
    iconTwo: {name: 'WEB STORM', picture: '/img/skill-webstorm.png', stars: 4},
    iconThree: null
  },
  // SKILL Operating systems
  {
    skillNameOne: 'OPERATING SYSTEMS',
    skillNameTwo: null,
    skillNameThree: null,
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    iconOne: {name: 'WINDOWS', picture: '/img/skill-os-windows.png', stars: 5},
    iconTwo: {name: 'MAC OS', picture: '/img/skill-os-mac.png', stars: 5},
    iconThree: {name: 'LINUX', picture: '/img/skill-os-linux.png', stars: 5}
  },
  // SKILLS SOFT
  {
    skillNameOne: 'SOFT SKILLS',
    skillNameTwo: null,
    skillNameThree: null,
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    iconOne: {name: 'COMMUNICATION', picture: '/img/soft-communication.png', stars: 5},
    iconTwo: {name: 'CREATIVITY', picture: '/img/soft-creativity.png', stars: 5},
    iconThree: {name: 'TEACHING', picture: 'img/soft-teaching.png', stars: 4}
  },
  // OTHER
  {
    skillNameOne: 'EDUCATION',
    skillNameTwo: 'EXPERIENCE',
    skillNameThree: null,
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    iconOne: {name: 'EDUCATION', picture: '/img/soft-education.png', stars: 5},
    iconTwo: {name: 'EXPERIENCE', picture: '/img/soft-experience.png', stars: 5},
    iconThree: null
  },
  // AFTER HOURS
  {
    skillNameOne: 'AFTER HOURS',
    skillNameTwo: null,
    skillNameThree: null,
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    iconOne: {name: 'GAMER', picture: '/img/soft-education.png', stars: 5},
    iconTwo: {name: 'RPG GEEK', picture: '/img/soft-experience.png', stars: 5},
    iconThree: {name: 'NATURE ENTHUSIAST', picture: '/img/soft-experience.png', stars: 5}
  }
];

export default skillBoxes;
