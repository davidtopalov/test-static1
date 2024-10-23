// Get all expertise items and the expertise section
const expertiseItems = document.querySelectorAll(".expertise-item");
const expertiseSection = document.querySelector(".expertise");

// Add event listeners to each expertise item
expertiseItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const imageUrl = item.getAttribute("data-image");
    expertiseSection.style.backgroundImage = `url(${imageUrl})`; // Change section background to image
    expertiseSection.style.backgroundSize = "cover"; // Cover the entire section
    expertiseSection.style.backgroundPosition = "center"; // Center the image
  });

  item.addEventListener("mouseleave", function () {
    expertiseSection.style.backgroundImage = "none"; // Reset background on mouse leave
  });
});
