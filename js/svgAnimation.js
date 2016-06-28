/*  -------------- svgAnimation.js ---------------------------------------------
 *  Responsible for controlling the animations of elements on the page.
 *
 *  Uses GSAP to control the selected elements, all animaiton happens over
 *  a single timeline.
 */


//  --------------  Declarations -----------------------------------------------


// Animation timeline
var tl = new TimelineLite();


// Individual elements

//  The logo as a whole
var logo = document.getElementById('logo');

// The elements that contain the hemispheres,
var hemisphereGold = document.getElementById('hemisphere-gold');
var hemisphereGarnet = document.getElementById('hemisphere-garnet');

// Collections of elements

// List of triangles to use in the random fade animation
var trianglesGold = document.getElementsByClassName("gold");
var trianglesGarnet = document.getElementsByClassName('garnet');


//  -------------- Funcitons ---------------------------------------------------

// Random Fade animation
//
// Fades random elements in the list of elements out of and then into view.
function randomFade(es) {
    var e = Math.floor(Math.random() * es.length);  // element from the list
    var t = Math.random() * 5;   // the duration of the animation
    var p = Math.random() * 50;  // the position to translate to

    console.log("Fading element to ", p, "at time ", t);

    // Translate and fade away
    tl.to( es[e]
        , t
        , {opacity: 0, x: p, y: p, scale: .5}
        );

    setTimeout(
        () => {
            // Translate back to orginal postion
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


//  -------------- Animation ---------------------------------------------------


// Intro logo animation.

tl.from(hemisphereGold, 1, {x:-100, y:-100, opacity:0, ease:Linear.easeOut});
tl.from(hemisphereGarnet, 1, {x:100, y:100, opacity:0, ease:Linear.easeOut} , "-=1");


// Call randomFade
setTimeout(() => {
    randomFade(trianglesGold);
    randomFade(trianglesGarnet);
}, 1000);
