function onclick() {
    $('div.share').toggle(function() {
        $("div.article").append('<div class="speech-bubble"><div class="share-text"><p>S H A R E</p></div><div class="share-point"><img src="./images/icon-facebook.svg" class="social-media"><img src="./images/icon-twitter.svg" class="social-media"><img src="./images/icon-pinterest.svg" class="social-media"></div></div>')
    }, function() {
        $("div.article").remove('<div class="speech-bubble"><div class="share-text"><p>S H A R E</p></div><div class="share-point"><img src="./images/icon-facebook.svg" class="social-media"><img src="./images/icon-twitter.svg" class="social-media"><img src="./images/icon-pinterest.svg" class="social-media"></div></div>')
    })
}

// $("div.article").append('<div class="speech-bubble"><div class="share-text"><p>S H A R E</p></div><div class="share-point"><img src="./images/icon-facebook.svg" class="social-media"><img src="./images/icon-twitter.svg" class="social-media"><img src="./images/icon-pinterest.svg" class="social-media"></div></div>')