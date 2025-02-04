// Offer close

var offer__close = document.getElementById('offer__close')
var close_icon = document.getElementById('close_icon')

close_icon.addEventListener('click', function() {
    offer__close.style.display = 'none';
})


// favourite

function heartchange(event) {
    
    if (event.target.src.includes('blackheart.png')) {
        alert(event.target.src.includes('blackheart.png'))
        event.target.src = './images/redheart.png';
    } else {
        alert(event.target.src.includes('blackheart.png'))
        event.target.src = './images/blackheart.png';
    }
}
