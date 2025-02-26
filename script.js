document.addEventListener("DOMContentLoaded", () => {
    const bgText = document.querySelector(".background-text");

    window.addEventListener("scroll", () => {
        let scrollValue = window.scrollY;
        bgText.style.transform = `translate(-50%, ${scrollValue * 0.3}px)`;
    });
});

function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
