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


// Image Sliding

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider__s1 img");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");

    let currentIndex = 0;

    function updateSlider() {
        images.forEach((img, index) => {
            img.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first image
        }
        // currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to last image
        }
        // currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlider();
    });
});


/*
"DOMContentLoaded" --> 
It ensures that the script runs only after the HTML document has been fully loaded but before external resources like images, stylesheets, or iframes are loaded.
If you place the <script> just before the closing </body> tag, the document will already be loaded, and DOMContentLoaded won't be necessary.
*/ 


// Filtering

document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll('.filters input[type="checkbox"]');
    const galleryItems = document.querySelectorAll('.gallery-items');

    filters.forEach(filter => {
        filter.addEventListener('change', function () {
            filterGallery();
        });
    });

    function filterGallery() {
        let selectedOccasions = getCheckedValues("occasion");
        let selectedColors = getCheckedValues("colors");
        let selectedArrivals = getCheckedValues("arrivals");

        galleryItems.forEach(item => {
            let itemOccasion = item.getAttribute('data-occasion');
            let itemColor = item.getAttribute('data-color');
            let itemArrival = item.getAttribute('data-arrival');

            let occasionMatch = selectedOccasions.length === 0 || selectedOccasions.includes(itemOccasion);
            let colorMatch = selectedColors.length === 0 || selectedColors.includes(itemColor);
            let arrivalMatch = selectedArrivals.length === 0 || selectedArrivals.includes(itemArrival);

            if (occasionMatch && colorMatch && arrivalMatch) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    function getCheckedValues(filterName) {
        return [...document.querySelectorAll(`input[name^=${filterName}]:checked`)].map(el => el.value);
    }
});

