const clock = document.getElementById('clock');
const wrapper = document.createElement('div');
wrapper.className = 'clock-wrapper';
clock.append(wrapper);
clock.setAttribute('class', 'gradient-border');

const clockAtr = ['hour', 'min', 'sec'];

clockAtr.forEach((item, index) => {
  const span = document.createElement('span');
  span.className = item + '_timer';
  wrapper.append(span);

  if (index !== clockAtr.length - 1) {
    const colon = document.createElement('span');
    colon.className = 'clockColon';
    colon.textContent = ':';
    wrapper.append(colon);
  }
});

function myClock() {
  const now = new Date();

  const hourTimer = document.body.querySelector('span.hour_timer');
  const minTimer = document.body.querySelector('span.min_timer');
  const secTimer = document.body.querySelector('span.sec_timer');

  let hour = now.getHours();
  hour = hour < 10 ? '0' + hour : hour;

  let min = now.getMinutes();
  min = min < 10 ? '0' + min : min;

  let sec = now.getSeconds();
  sec = sec < 10 ? '0' + sec : sec;

  secTimer.textContent = sec;

  if (minTimer.textContent === '' || sec === '00') {
    minTimer.textContent = min;

    if (hourTimer.textContent === '' || min === '00') {
      hourTimer.textContent = hour;
    }
  }
}
let timerId;

function clockStart() {
  timerId = setInterval(myClock);
}

function clockStop() {
  clearInterval(timerId);
}

clockStart();

const buttons = document.createElement('div');
buttons.className = 'clock-buttons';
wrapper.after(buttons);

const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.type = 'button';
startButton.onclick = clockStart;
startButton.value = 'start';
startButton.className = 'clock-button';

const stopButton = document.createElement('button');
stopButton.textContent = 'Stop';
stopButton.type = 'button';
stopButton.onclick = clockStop;
stopButton.value = 'stop';
stopButton.className = 'clock-button';

buttons.append(startButton, stopButton);
