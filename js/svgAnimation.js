// Declarations
var tl = new TimelineLite();

var logo = document.getElementById('logo');

var hemisphereGold = document.getElementById('hemisphere-gold');
var hemisphereGarnet = document.getElementById('hemisphere-garnet');

var trianglesGold = document.getElementsByClassName("gold");
var trianglesGarnet = document.getElementsByClassName('garnet');


// Random Fade animation
//
// Fades random elements in the list of elements out and then into view.
function randomFade(es) {
    var e = Math.floor(Math.random() * es.length);
    var t = Math.random() * 5;
    var p = Math.random() * 50;

    console.log("Fading element to ", p, "on time ", t);

    tl.to( es[e]
        , t
        , {opacity: 0 , x: p , y: p , scale: .5}
        );

    setTimeout( () => {
            tl.fromTo( es[e]
                , t * .75
                , {immediateRender:false, opacity: 0, x: -p, y: -p, scale: 1.25}
                , {opacity: 1, x: 0, y: 0, scale: 1}
                );
            randomFade(es);
            }
        , t * 1000
        );
}


// Intro logo animation.
tl.from(hemisphereGold, 1, {x:-100, y:-100, opacity:0, ease:Linear.easeOut});
tl.from(hemisphereGarnet, 1, {x:100, y:100, opacity:0, ease:Linear.easeOut}, "-=1");

// Random Fade
setTimeout(() => {
    randomFade(trianglesGold);
    randomFade(trianglesGarnet);
}, 1000);
