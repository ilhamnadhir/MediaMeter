const container = document.querySelector(".container");
const backgroundText = document.querySelector(".background-text");

// Move text when scrolling
container.addEventListener("scroll", () => {
    let scrollTop = container.scrollTop;
    backgroundText.style.transform = `translateX(-50%) translateY(${scrollTop * 0.5}px)`;
});
