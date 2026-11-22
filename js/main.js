(function () {
  'use strict';

  // ----- Video: show the illustrated cover until someone hits play -----
  var video = document.getElementById('demo-video');
  var cover = document.querySelector('.video-cover');

  function playVideo(event) {
    if (!video) return;
    if (event) event.preventDefault();

    if (cover) cover.hidden = true;
    video.hidden = false;

    document.getElementById('video').scrollIntoView({ behavior: 'smooth', block: 'center' });

    var p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () { /* autoplay blocked: controls are visible, user can press play */ });
    }
  }

  document.querySelectorAll('.js-play-video').forEach(function (el) {
    el.addEventListener('click', playVideo);
  });

  // If the MP4 is missing, keep the cover and log a helpful hint.
  if (video) {
    var source = video.querySelector('source');
    (source || video).addEventListener('error', function () {
      console.warn('[ShiftFill] Video not found. Add your file at assets/video/shiftfill-demo.mp4');
      video.hidden = true;
      if (cover) cover.hidden = false;
    });
  }

  // ----- FAQ: only one item open at a time -----
  var items = document.querySelectorAll('.faq-list details');
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      items.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  // ----- Footer year -----
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
