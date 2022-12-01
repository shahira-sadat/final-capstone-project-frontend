import { createSlice } from '@reduxjs/toolkit';
import team1 from '../../assets/img/w.png';
import team2 from '../../assets/img/sh.png';
import team3 from '../../assets/img/n.png';

export const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [
      {
        id: 1,
        name: 'Williams Colmenares',
        bio: 'Preparing myself on @microverseinc to be a Full-Stack Developer. Passionate to learn new things every day. Currently looking for new opportunities.',
        backbio: 'I am Williams, a full-stack developer currently enrolled at Microverse. I have spent several months completely immersed in remote development just like a real remote dev job, building everything from landing pages to Rails APIs, During the curriculum I have grown my stack with languages like JavaScript and Ruby and frameworks like React and Rails. In all my studies in different areas, I have gained abilities like fighting through difficulty and never giving up because constant practice is the key to growth.',
        image: team1,
        github: 'https://github.com/williamscch',
        twitter: 'https://twitter.com/wdavidcch',
        linkedin: 'https://www.linkedin.com/in/williamscolmenaresch/',
      },
      {
        id: 2,
        name: 'Shahira Sadat',
        bio: 'Getting Full-Stack Developer at Microverse (Micronaut)🤓| UI/UX Designer at Dastyaar Satrtup👩🏻‍💻| Mentor at Kickstart👩‍💼| Open to new opportunities😊',
        backbio: 'Hello, I am Shahira, a multi-skilled fullstack developer with experience in developing web apps, and UI/UX designing. For the last two years, I have been working remotely so, I learned teamwork, collaboration, remote working, and flexibility. I worked on several projects: landing pages and small web apps. I have worked with HTML, CSS, JavaScript, Reactjs , Ruby and Ruby on Rails. I am open to exploring fullstack development opportunities.',
        image: team2,
        github: 'https://github.com/shahira-sadat',
        twitter: 'https://twitter.com/SadatShahira',
        linkedin: 'https://www.linkedin.com/in/shahira-sadat',
      },
      {
        id: 3,
        name: 'Nimrod Acosta',
        bio: 'I am a web application developer and full-stack developer. Javascript, HTML CSS, Webpack, React and Redux, ReactBootstrap MUI. Also Ruby and Ruby & Rails.',
        backbio: 'I am Nimrod Acosta, a fullstack developer. Before web development, I dedicated myself to video game development, managing to finish 4 mobile apps. This allowed me to unify my love for art, my knowledge of music and my programming skills in a single project. I am currently studying at Microverse to improve my skills as a full-stack developer. I love learning new things, new experiences and sharing ideas. I also enjoy working in a team and I handle work under pressure very well.',
        image: team3,
        github: 'https://github.com/nimplay',
        twitter: 'https://twitter.com/NimrodAcosta',
        linkedin: 'https://www.linkedin.com/in/nimrod-acosta-734330169/',
      },
    ],
    status: null,
  },
});

export default teamsSlice.reducer;
