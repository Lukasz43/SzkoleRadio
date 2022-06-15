'use strict';

const songsBoxEl = document.querySelector('.songs-box');
const songNameEl = document.querySelector('.song-name');
const songPerformerEl = document.querySelector('.song-performer');
const songSubmitEl = document.querySelector('.song-submit');
const buttonPlayedEl = document.querySelector('.button-played');

const h1Header = document.querySelector('.h1-header');

songSubmitEl.addEventListener('click', function () {
  if (songNameEl.value && songPerformerEl.value) {
    const songName = songNameEl.value;
    const songPerformer = songPerformerEl.value;

    console.log(songName, songPerformer);

    const newSongEntry = document.createElement('div');

    newSongEntry.innerHTML = `<div class="song">
  <h2 class="song-name-class">${songName}</h2>
  <p class="performer-paragraph">${songPerformer}</p>
  <a href="#"
    ><img src="yt-logo.svg.png" alt="YT-LOGO" class="youtube-logo"
  /></a>
  <p class="added-by-class">Dodano przez: Łukasz</p>
</div>`;

    newSongEntry.classList.add('.song');
    songsBoxEl.insertAdjacentHTML('afterbegin', newSongEntry.innerHTML);

    songNameEl.value = '';
    songPerformerEl.value = '';
  } else {
    console.log('You must type in both song name and performer.');
  }
});

// setInterval(function () {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   h1Header.style.color = `#${randomColor}`;
//   // console.log(randomColor);
// }, 1000);
