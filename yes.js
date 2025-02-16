const febHolidays = [
"Dear baby, please feel it ❤️" , 
"Please this is a cycle of love, feel it properly 😘" , 
"You're my friend, you're my love 😊"  ,
"You're the only one, yet you're a thousand 🤩" , 
"You're there in sorrow, you're there in happiness 🤨" , 
"You're enough for my life's journey ❤"  ,
"I have loved you with all my heart, and I still do ❤️" , 
"You're my everything ✔" , 
"You're my soulmate ✨💕",  
"Just a little more… wait baby 😘" , 
"I will never leave you 🥺"  ,
"No matter how far we are, I will always love you 🥰" , 
"In my love, there's never multitasking, you're the only one 😂",  
"You're the most beautiful, cutest, funniest, and sweetest girl alive 🤞" , 
"In one word, you're perfect 😍" , 
"I'm the happiest man alive 🥰" , 
"I'm so grateful I met you ❤️"  ,
"I will always do my best to keep you happy 🥺" , 
"I will always be with you 🤞✔"  ,
"Never feel alone 💓"  ,
"You are the most special person in my life 🥰",  
"I don’t want to lose you 😒" , 
"Honestly, there’s no one better than you ❤️" , 
"You're the best baby!! 💖"  ,
"I miss you when something really good happens 🤨" , 
"I love every moment spent with you 💓" , 
"Whether virtual or offline, every moment is special ❤️" , 
"There were some hardships 😢"  ,
"But we overcame most of them together 🥰",  
"And that made me realize how important you are in my life ❤️"  ,
"This entire love journey is just for you 😘"  ,
"My unconditional love, my private variable 💖", 
"I'm binary in love; you're the only '1' in my life 🥰" , 
"Thanks to God for bringing us together 🙏"  ,
"You're the love of my life ❤️" , 
"I Miss you a lot ra ❤️",
"One Hug is the medicine of all stress 🥰",
"Your presence will tells me value of smile 🥰"
  

];

const ulEl = document.querySelector("ul");
const d = new Date();
let dayNumber = d.getMonth() === 1 ? d.getDate() - 1 : 0;
let activeIndex = dayNumber;
const rotate = -360 / febHolidays.length;

init();

function init() {
  febHolidays.forEach((message, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1}</time><span>${message}</span>`;
      ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}

function adjustDay(nr) {
  dayNumber += nr;
  ulEl.style.setProperty("--currentDay", dayNumber);
  
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");

  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
  
  document.body.style.backgroundColor = window.getComputedStyle(newActiveEl).backgroundColor;
  newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") adjustDay(-1);
  else if (e.key === "ArrowDown") adjustDay(1);
});
