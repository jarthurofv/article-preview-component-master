
const shareButton = document.querySelector(".share");
const socialDiv = document.querySelector(".social");


shareButton.addEventListener("click", () => {
  if (socialDiv.style.display === "none" || socialDiv.style.display === "") {
    socialDiv.style.display = "flex";
    shareButton.style.backgroundColor = "hsl(212, 23%, 69%)"; 
    shareButton.style.color = "white"; 
  } else {
    socialDiv.style.display = "none";
    shareButton.style.backgroundColor = "hsl(220, 8%, 93%)";
    shareButton.style.color = "";
  }
});
