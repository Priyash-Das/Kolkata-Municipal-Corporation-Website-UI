const scrollContainer = document.querySelector(".message-scroll");
let scrollSpeed = 1; // pixels per step
let delay = 30; // ms per step
let scrollInterval;

function startScrolling() {
  scrollInterval = setInterval(() => {
    scrollContainer.scrollTop += scrollSpeed;
    if (
      scrollContainer.scrollTop + scrollContainer.clientHeight >=
      scrollContainer.scrollHeight
    ) {
      scrollContainer.scrollTop = 0;
    }
  }, delay);
}

function stopScrolling() {
  clearInterval(scrollInterval);
}

window.addEventListener("load", startScrolling);

// Pause/resume vertical scrolling on hover
scrollContainer.addEventListener("mouseenter", stopScrolling);
scrollContainer.addEventListener("mouseleave", startScrolling);

// Pause/resume marquee (CSS animation) on hover
const marqueeText = document.querySelector(".marquee-text");

marqueeText.addEventListener("mouseenter", () => {
  marqueeText.style.animationPlayState = "paused";
});

marqueeText.addEventListener("mouseleave", () => {
  marqueeText.style.animationPlayState = "running";
});
