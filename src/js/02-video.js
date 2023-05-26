// commit
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function playerCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

player.on('timeupdate', throttle(playerCurrentTime, 1000));

window.addEventListener('DOMContentLoaded', setCurrentTime);

function setCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
