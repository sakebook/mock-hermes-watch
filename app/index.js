import clock from 'clock';
import document from 'document';

const dateText = document.getElementById('js-date');
const hoursBar = document.getElementById('hours');
const minutesBar = document.getElementById('minutes');
const backTile = document.getElementById('back');

function onTick() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  hoursBar.groupTransform.rotate.angle = (hours + minutes / 60) * 30;
  minutesBar.groupTransform.rotate.angle = minutes * 6;
  backTile.groupTransform.rotate.angle = minutes * 6;
  dateText.text = now.getDate();
}

clock.granularity = 'minutes';
clock.ontick = onTick;

onTick();
