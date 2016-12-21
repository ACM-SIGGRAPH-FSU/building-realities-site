var animationDelay = 2500;

function cycleAnimation(child) {
    var next = nextChild(child);
    switchChild(child, next);
    setTimeout(function(){ cycleAnimation(next) }, animationDelay);
}

function nextChild(child) {
    return (!child.is(':last-child')) ? child.next() : child.parent().children().eq(0);
}

function switchChild(oldChild, newChild) {
    oldChild.removeClass('visible').addClass('hidden');
    newChild.removeClass('hidden').addClass('visible');
}

function loopAnimation(headlines, duration) {
    headlines.each(function(){
        var parent = $(this);

        //trigger animation
        setTimeout(function(){ cycleAnimation( parent.find('.visible').eq(0) ) }, duration);
    });
}

jQuery(document).ready(function($){
    // Begins animation loop on the headline elements.
    loopAnimation($('.headline'), animationDelay);
});
