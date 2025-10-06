// Drum Machine functionality (vanilla JS)

// Map keys to pad info is implicit in the DOM attributes.
// Keys: Q W E A S D Z X C
const padKeys = ['Q','W','E','A','S','D','Z','X','C'];
const display = document.getElementById('display');
const volumeControl = document.getElementById('volume');
let currentVolume = parseFloat(volumeControl.value || 0.9);

// Helper: play audio for given key (e.g. 'Q')
function playKey(key) {
  const upper = key.toUpperCase();
  const audio = document.getElementById(upper);
  if (!audio) return;
  // reset playback to allow retrigger
  audio.currentTime = 0;
  audio.volume = currentVolume;
  const playPromise = audio.play();
  // Some browsers return promise; ignore errors
  if (playPromise && typeof playPromise.then === 'function') {
    playPromise.catch(() => {/* ignore */});
  }

  // update display using parent .drum-pad data-name
  const pad = audio.closest('.drum-pad');
  const name = pad ? pad.getAttribute('data-name') : upper;
  setDisplay(name);

  // briefly set visual active state
  if (pad) {
    pad.classList.add('active');
    setTimeout(() => pad.classList.remove('active'), 120);
  }
}

// Update display text
function setDisplay(text) {
  if (!display) return;
  display.textContent = text;
}

// Click handlers for pads
document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', () => {
    // each pad has an audio child with id equal to letter
    const audio = pad.querySelector('audio.clip');
    if (audio) playKey(audio.id);
  });
});

// Keyboard handlers
document.addEventListener('keydown', (e) => {
  // ignore if focus is on input/range etc.
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;

  const k = e.key.toUpperCase();
  if (padKeys.includes(k)) {
    playKey(k);
  }
});

// Volume control
volumeControl.addEventListener('input', (e) => {
  currentVolume = parseFloat(e.target.value);
});

// Initialize display
setDisplay('Ready');
