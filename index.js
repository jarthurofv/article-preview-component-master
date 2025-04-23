// Select the share button and the social div
const shareButton = document.querySelector(".share");
const socialDiv = document.querySelector(".social");

// Add a click event listener to the share button
shareButton.addEventListener("click", () => {
  // Toggle the visibility of the social div
  if (socialDiv.style.display === "none" || socialDiv.style.display === "") {
    socialDiv.style.display = "flex"; // Show the social div
    shareButton.style.backgroundColor = "hsl(212, 23%, 69%)"; // Change background color
    shareButton.style.color = "white"; // Optional: Change text/icon color
  } else {
    socialDiv.style.display = "none"; // Hide the social div
    shareButton.style.backgroundColor = "hsl(220, 8%, 93%)"; // Revert background color
    shareButton.style.color = ""; // Optional: Revert text/icon color
  }
});
