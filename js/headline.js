function hideWord($word) {
    var nextWord = takeNext($word);
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
}

function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('visible').addClass('hidden');
    $newWord.removeClass('hidden').addClass('visible');
}


function loopAnimation($headlines) {
    var duration = animationDelay;
    $headlines.each(function(){
        var headline = $(this);

        //trigger animation
        setTimeout(function(){ hideWord( headline.find('.visible').eq(0) ) }, duration);
    });
}


jQuery(document).ready(function($){
    //set animation timing
    var animationDelay = 2500;

    initHeadline();

    function initHeadline() {
        //initialise headline animation
        loopAnimation($('.headline'));
    }

});
