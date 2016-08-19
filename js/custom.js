/**
 * Custom JS
 */

var scene = $('.scene');

var svgs = [
  'svg/bottom.svg': '5',
  'svg/fish.svg': '5',
  'svg/submarine.svg': '1',
  'svg/waves.svg': '1'
];

function loadSvgs() {
  $.each(svgs, function(url, total) {
    $.get(url, function(data) {
      var svg = $(data).find("svg").first(),
      svgClass = svg.attr('class');
      for (var i = 0; 1 < total; i++){
        svg.attr('class', svgClass = " " + svgClass + '-' + (i + 1)).clone().appendTo(scene);
      }
    })
  });
}

$(document).ready(function() {
  loadSvgs();
});
