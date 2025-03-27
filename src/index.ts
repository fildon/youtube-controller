// TODO make this whole thing idempotent

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
minusButton.style.fontSize = "50px";
minusButton.addEventListener("click", () => {
  video.playbackRate -= 0.01;
  speedDisplay.textContent = `${video.playbackRate * 100}%`;
});

// Initialize speed display
const speedDisplay = document.createElement("span");
speedDisplay.append("100%");
speedDisplay.classList.add("playerButton", "ytp-button");
speedDisplay.style.fontSize = "50px";

// Initialize plus button
const plusButton = document.createElement("button");
plusButton.append("+");
plusButton.classList.add("playerButton", "ytp-button");
plusButton.style.fontSize = "50px";
plusButton.addEventListener("click", () => {
  video.playbackRate += 0.01;
  speedDisplay.textContent = `${video.playbackRate * 100}%`;
});

// Insert the controls into the UI
buttonContainer.prepend(minusButton, speedDisplay, plusButton);
