# Drum Machine 🎵

A simple web-based drum machine that allows users to play drum sounds by clicking pads or pressing keyboard keys.  
Built with vanilla JavaScript, HTML, and CSS.

## Demo

You can see the live demo here on CodePen:  
[Drum Machine by jr-delfin](https://codepen.io/jr-delfin/pen/NPxdLvB) :contentReference[oaicite:0]{index=0}

---

## Table of Contents

1. Features  
2. Tools / Technologies Used  
3. How It Works  
4. Project Structure  
5. Usage / Instructions  
6. Future Enhancements  
7. License

---

## 1. Features

- Nine drum pads mapped to keys: **Q, W, E, A, S, D, Z, X, C**  
- Each pad plays a unique drum sound  
- Clickable UI and keyboard support  
- Display shows the sound name currently played  
- Volume control via a range slider  
- Visual feedback (pad “active” animation)  
- Responsive layout for smaller screens

---

## 2. Tools / Technologies Used

- HTML5  
- CSS3 (with CSS variables, flexbox, grid, transitions)  
- Vanilla JavaScript (ES6+)  
- FreeCodeCamp test suite (via external script on CodePen) :contentReference[oaicite:1]{index=1}  
- Audio assets hosted via AWS S3 (FreeCodeCamp drum sound files)  

---

## 3. How It Works

- Each `.drum-pad` element contains an `<audio>` child with a unique `id` equal to the key (e.g. `Q`, `W`)  
- When the user clicks a pad or presses a corresponding key:
  - The `playKey(key)` function resets the `currentTime` of the audio, sets its volume, and calls `.play()`  
  - The display is updated with the pad’s `data-name` attribute  
  - A `.active` class is applied for a short animation  
- Keyboard events are listened via `document.addEventListener('keydown', ...)`  
- Volume input (`<input type="range">`) adjusts the global `currentVolume` used for playback  
- CSS handles layout, visuals, responsive behavior, and transitions
