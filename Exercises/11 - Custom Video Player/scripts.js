/*
<div class="player">
     <video class="player__video viewer" src="652333414.mp4"></video>

     <div class="player__controls">
       <div class="progress">
        <div class="progress__filled"></div>
       </div>
       <button class="player__button toggle" title="Toggle Play">►</button>
       <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
       <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
       <button data-skip="-10" class="player__button">« 10s</button>
       <button data-skip="25" class="player__button">25s »</button>
     </div>
   </div>
*/
const playerControls = document.querySelector('.player__controls').children;
const contentEditable = document
	.querySelector('.player__controls')
	.compareDocumentPosition();
const progress = playerControls.item('.progress');
const location =
	(progress.firstElementChild.scrollWidth / progress.scrollWidth) * 100;
//const location = controls.scrollWidth / controls.cclientWidth;

progress.addEventListener('change', (e) => {
	console.log(e.compareDocumentPosition(playerControls.location));
});
console.log(progress);
console.log(location);
//console.log(controls.clientWidth);
//console.log(location);
//const progress =

//console.log(progressBarFilled);
