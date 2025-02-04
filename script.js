// Offer close

var offer__close = document.getElementById('offer__close')
var close_icon = document.getElementById('close_icon')

close_icon.addEventListener('click', function() {
    offer__close.style.display = 'none';
})


// Favourite

function heartchange(event) {
    
    if (event.target.src.includes('blackheart.png')) {
        // alert(event.target.src.includes('blackheart.png'))
        event.target.src = './images/redheart.png';
    } else {
        // alert(event.target.src.includes('blackheart.png'))
        event.target.src = './images/blackheart.png';
    }
}

// Side nav bar

var sidenav = document.getElementById('sidenav');
var closenav = document.getElementById('closenav');
var menubar = document.getElementById('menubar');
console.log(sidenav)
console.log(closenav)

menubar.addEventListener('click', function(){
    // alert('hello')
    sidenav.style.right = 0;
})

closenav.addEventListener('click', function(){
    sidenav.style.right = '-50%';
})