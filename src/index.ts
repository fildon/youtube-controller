// Fetch elements on the page
const buttonContainer = document.querySelector(".ytp-right-controls");
if (!buttonContainer) {
  // TODO nicer error handling
  throw new Error("FUCK");
}
const video = document.querySelector("video");
if (!video) {
  // TODO nicer error handling
  throw new Error("FUCK");
}

// Initialize minus button
const minusButton = document.createElement("button");
minusButton.append("-");
minusButton.classList.add("playerButton", "ytp-button");
minusButton.addEventListener("click", () => {
  video.playbackRate -= 0.01;
});

// Initialize plus button
const plusButton = document.createElement("button");
plusButton.append("+");
plusButton.classList.add("playerButton", "ytp-button");
plusButton.addEventListener("click", () => {
  video.playbackRate += 0.01;
});

// Insert the controls into the UI
buttonContainer.prepend(minusButton, plusButton);
