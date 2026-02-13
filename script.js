// script.js

// Navigate between named pages (IDs)
function goToPage(pageId) {
    // hide all page-like containers (those with class 'page')
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(p) { p.style.display = 'none'; });

    // Try to show element by id
    var el = document.getElementById(pageId);
    if (el) {
        el.style.display = 'flex';
        if (pageId === 'page3') {
            displayCatHeartInParagraph();
        }
    }
}

// Insert the cat-heart.gif into the paragraph page
function displayCatHeartInParagraph() {
    var container = document.getElementById('paragraph-content');
    if (!container) return;
    // remove any existing image we added earlier
    var existing = document.getElementById('cat-heart-img');
    if (existing) existing.remove();
    var img = new Image();
    img.id = 'cat-heart-img';
    img.src = 'cat-heart.gif';
    img.alt = 'Cat Heart';
    img.style.maxWidth = '250px';
    img.style.display = 'block';
    img.style.margin = '0 auto 20px';
    img.onload = function() {
        container.insertBefore(img, container.firstChild);
    };
}

// Function to display the sad.gif
function displaySadGif() {
    var imageContainer = document.getElementById('image-container-2-5');
    imageContainer.innerHTML = ''; // Clear existing content
    var sadImage = new Image();
    sadImage.src = 'sad.gif'; // Assuming the sad image is named "sad.gif"
    sadImage.alt = 'Sad';
    sadImage.onload = function() {
        imageContainer.appendChild(sadImage);
    };
}

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            goToPage('thank-you');
        });
    } else {
        alert('Invalid option');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();