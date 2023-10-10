const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let intervalId;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function updateDots() {
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    updateDots();
}

function startAutoPlay() {
    intervalId = setInterval(nextImage, 2000); // Change image every 3 seconds (adjust as needed)
}

function stopAutoPlay() {
    clearInterval(intervalId);
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        currentIndex = i;
        showImage(currentIndex);
        updateDots();
        stopAutoPlay();
    });
});

// Start auto play when the page loads
startAutoPlay();
