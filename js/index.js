// eslint-disable-next-line no-unused-vars
const speakers = [
  // eslint-disable-next-line linebreak-style
  {
    img: './images/bjarne.jfif',
    name: 'Bjarne Stroustrup',
    title: 'Columbia University',
    description: 'Bjarne Stroustrup is a Danish computer scientist, most notable for the invention and development of the C++ programming language',
  },

  {
    img: './images/kilnam-chon.jpg',
    name: 'Kilnam Chon',
    title: 'Osaka University, Seoul',
    description: 'As a result of his contributions, South Korea became the second country connected to the Internet, after the United States.',
  },
  {
    img: './images/tim-berner.jfif',
    name: 'Tim Berners-Lee',
    title: 'Visiting Professor at Oxford university',
    description: 'Inventor of the World Wide Web in 1989',
  },

  {
    img: './images/sanjay.jfif',
    name: 'Sanjay Ghemawat ',
    title: ' Senior Fellow at Google',
    description: 'Indian American computer scientist and software engineer at Google',
  },

];

// eslint-disable-next-line no-unused-vars
const speakerlist = (speaker) => {
  const section = document.getElementById('speakers-section-main');
  const div = document.createElement('div');
  div.setAttribute('class', 'speaker');
  section.append(div);
  const leftdiv = document.createElement('div');
  leftdiv.setAttribute('class', 'speaker-imgdiv');
  div.append(leftdiv);
  const pic = document.createElement('img');
  pic.setAttribute('class', 'speaker-pic');
  pic.setAttribute('src', speaker.img);
  leftdiv.append(pic);
  const rightdiv = document.createElement('div');
  rightdiv.setAttribute('class', 'speaker-info');
  div.append(rightdiv);
  rightdiv.innerHTML += `<h5 class="speaker-name">
   ${speaker.name}</h5>
  <p class="speaker-title">${speaker.title}</p>
  <br>
  <p class="speaker-desc">${speaker.description}</p>`;
};

speakers.forEach((speaker) => speakerlist(speaker));

const card1 = document.getElementById('card-1');
card1.addEventListener('mouseenter', () => {
  // eslint-disable-next-line no-alert
  card1.classList.add('active');
});

const card2 = document.getElementById('card-2');
card2.addEventListener('mouseenter', () => {
  // eslint-disable-next-line no-alert
  card2.classList.add('active');
});
const card3 = document.getElementById('card-3');
card3.addEventListener('mouseenter', () => {
  // eslint-disable-next-line no-alert
  card3.classList.add('active');
});
const card4 = document.getElementById('card-4');
card4.addEventListener('mouseenter', () => {
  // eslint-disable-next-line no-alert
  card4.classList.add('active');
});
const card5 = document.getElementById('card-5');
card5.addEventListener('mouseenter', () => {
  // eslint-disable-next-line no-alert
  card5.classList.add('active');
});

const card6 = document.getElementById('card-1');
card6.addEventListener('mouseleave', () => {
  // eslint-disable-next-line no-alert
  card6.classList.remove('active');
});

const card7 = document.getElementById('card-2');
card7.addEventListener('mouseleave', () => {
  // eslint-disable-next-line no-alert
  card7.classList.remove('active');
});
const card8 = document.getElementById('card-3');
card8.addEventListener('mouseleave', () => {
  // eslint-disable-next-line no-alert
  card8.classList.remove('active');
});
const card9 = document.getElementById('card-4');
card9.addEventListener('mouseleave', () => {
  // eslint-disable-next-line no-alert
  card9.classList.remove('active');
});
const card10 = document.getElementById('card-5');
card10.addEventListener('mouseleave', () => {
  // eslint-disable-next-line no-alert
  card10.classList.remove('active');
});

const mobilemenu = document.getElementById('open-menu');
mobilemenu.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '100%';
});

const closebtn = document.getElementById('closebtn');
closebtn.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '0%';
});