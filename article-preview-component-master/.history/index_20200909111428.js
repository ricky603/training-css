var click = false

$('div.share').click(function() {
    if (click == false) {
        click = true
        addHtml()
    } else {
        click = false
        removeHtml()
    }
})

function addHtml() {
    $("div.article").append('<div class="speech-bubble"><div class="share-text"><p>S H A R E</p></div><div class="share-point"><img src="./images/icon-facebook.svg" class="social-media"><img src="./images/icon-twitter.svg" class="social-media"><img src="./images/icon-pinterest.svg" class="social-media"></div></div>')
}

function removeHtml() {
    $("div.article").remove('div.speech-bubble')

}

// $("div.article").append('<div class="speech-bubble"><div class="share-text"><p>S H A R E</p></div><div class="share-point"><img src="./images/icon-facebook.svg" class="social-media"><img src="./images/icon-twitter.svg" class="social-media"><img src="./images/icon-pinterest.svg" class="social-media"></div></div>')