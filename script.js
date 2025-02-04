// Offer close

var offer__close = document.getElementById('offer__close')
var close_icon = document.getElementById('close_icon')

close_icon.addEventListener('click', function() {
    offer__close.style.display = 'none';
})


// favourite

function heartchange(event) {
    if (event.target.src == 'http://127.0.0.1:5500/Projects/Nostra/images/blackheart.png') {
        event.target.src = './images/redheart.png'
    }
    else {
        event.target.src = 'http://127.0.0.1:5500/Projects/Nostra/images/blackheart.png'
    }
}