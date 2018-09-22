import clock from 'clock';
import document from 'document';

const hoursBar = document.getElementById('hours');
const minutesBar = document.getElementById('minutes');

function onTick() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  hoursBar.groupTransform.rotate.angle = (hours + minutes / 60) * 30;
  minutesBar.groupTransform.rotate.angle = minutes * 6;
}

clock.granularity = 'seconds';
clock.ontick = onTick;

onTick();
