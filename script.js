function toggleMenu() {
    document.querySelector('.header').classList.toggle('active');
}

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll('.game-gallery .images img');

var currentIndex = 0;

// Hide the modal initially
modal.style.display = "none";

// Add click event listeners to all images
images.forEach(function(img, index) {
    img.addEventListener('click', function() {
        console.log('Image clicked, opening modal');
        modal.style.display = "flex"; // Use 'flex' to ensure it's centered
        modalImg.src = this.src;
        currentIndex = index;
    });
});

// Get the <span> elements that close the modal or navigate
var span = document.getElementsByClassName("close")[0];
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on <span> (prev), show the previous image
prev.onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    modalImg.src = images[currentIndex].src;
}

// When the user clicks on <span> (next), show the next image
next.onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = images[currentIndex].src;
}

// Close the modal if the user clicks anywhere outside of the modal image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


