function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}] "`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}] "`)
  if (!audio) return; // stop the fuction running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  console.log(key);
  key.classList.add("playing ");

}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if is not a Transform
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => add.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);