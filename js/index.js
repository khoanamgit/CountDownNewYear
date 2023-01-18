// import { Fireworks } from '../node_modules/fireworks-js';

const fireContainer = document.querySelector(".fireworks-container");
const year = document.querySelector(".year");
const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");



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

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countDownInterval);
  }
};

countDown();

const countDownInterval = setInterval(countDown, 1000);

const fireworks = new Fireworks(fireContainer, {
  speed: 0.01,
  acceleration: 1.05,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 8,
});

fireworks.start();
