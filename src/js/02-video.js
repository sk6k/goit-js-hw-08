import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttled = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttled);

function saveCurrentTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    Number.parseInt(data.seconds)
  );
  console.log(localStorage);
}

const savedCurretTime = localStorage.getItem('videoplayer-current-time');
if (savedCurretTime) {
  player.setCurrentTime(Number(localStorage['videoplayer-current-time']));
  console.log(Number(localStorage['videoplayer-current-time']));
}
