/**
 * Custom JS
 */

var scene = $('.scene');

var svgs = [
  'svg/bottom.svg',
  'svg/fish.svg',
  'svg/submarine.svg',
  'svg/waves.svg'
];

function loadSvgs() {
  $.each(svgs, function(key, url) {
    $.get(url, function(data) {
      $(data).find("svg").appendTo(scene);
    })
  });
}

$(document).ready(function() {
  loadSvgs();
});
