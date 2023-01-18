const fireContainer = document.querySelector(".fireworks-container");
const year = document.querySelector(".year");
const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");

const musicIcon = document.querySelector(".icon");
const audio = document.querySelector("audio");

const listMusic = [
  "./assets/music/hpny.mp3",
  "./assets/music/khucgiaomua.mp3",
  "./assets/music/thitham.mp3",
  "./assets/music/emchaotet.mp3",
  "./assets/music/namquadalamgi.mp3"
];

musicIcon.addEventListener("click", function () {
  const randomIdx = Math.trunc(Math.random() * listMusic.length);
  audio.src = listMusic[randomIdx];
  document.getElementById("my_audio").play();
});

const now = new Date();
year.innerHTML = now.getFullYear();

const countdownDate = new Date("Jan 22, 2023 00:00:00").getTime();

const countDown = () => {
  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let hourFinal = hours < 10 ? "0" + hours : hours;
  let minuteFinal = minutes < 10 ? "0" + minutes : minutes;
  let secondFinal = seconds < 10 ? "0" + seconds : seconds;

  day.innerHTML = days;
  hour.innerHTML = hourFinal;
  minute.innerHTML = minuteFinal;
  second.innerHTML = secondFinal;

  if (distance < 0) {
    clearInterval(countDownInterval);
  }
};

countDown();

const countDownInterval = setInterval(countDown, 1000);

const fireworks = new Fireworks(fireContainer, {
  speed: 1,
  acceleration: 1.05,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 8,
});

fireworks.start();
