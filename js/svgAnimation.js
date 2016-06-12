var logo = document.getElementById('logo');
var hemisphere_gold = document.getElementById('hemisphere-gold');
var hemisphere_garnet = document.getElementById('hemisphere-garnet');

TweenMax.from(hemisphere_gold, 1, {x:-100, y:-100, opacity:0, ease:Linear.easeOut});
TweenMax.from(hemisphere_garnet, 1, {x:100, y:100, opacity:0, ease:Linear.easeOut});
