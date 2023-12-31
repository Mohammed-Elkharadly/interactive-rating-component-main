const mainContent = document.querySelector(".main-content");
const secondContent = document.querySelector(".second-content");
const allBtns = document.querySelectorAll(".btn-container .btn");
const btn = document.querySelector(".submit");

allBtns.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

// handle submit button
btn.addEventListener("click", handleSubmitClick);

function handleButtonClick(e) {
  // remove "choice" class from the all buttons
  allBtns.forEach((btn) => btn.classList.remove("choice"));

  const currentBtn = e.target;

  // Add "choice" class to the clicked button
  currentBtn.classList.add("choice");
}

function handleSubmitClick() {
  // select the text content of the class choice
  const selectedRating = document.querySelector(".btn.choice").textContent;

  // select the user choice
  const userChoice = document.querySelector(".user-choices");

  // edit the text content of the selectedRating to the userChoice
  userChoice.textContent = selectedRating;

  // hide the main content
  mainContent.classList.add("hidden");

  // show the second content
  secondContent.classList.add("active");

  setBackToDefault();
}

// return the main content and second content back to default
function setBackToDefault() {
  setTimeout(() => {
    mainContent.classList.remove("hidden");

    secondContent.classList.remove("active");

    // remove "choice" class from the all buttons
    allBtns.forEach((btn) => btn.classList.remove("choice"));
  }, 5000);
}
