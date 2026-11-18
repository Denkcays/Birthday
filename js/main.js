// Логика стартового экрана и запуска поздравления.
const introScreen = document.querySelector("#introScreen");
const startButton = document.querySelector("#startButton");

startButton?.addEventListener("click", () => {
    if (!introScreen) return;

    introScreen.classList.add("intro-screen-hidden");
    window.setTimeout(() => {
        introScreen.hidden = true;
        document.querySelector("#greeting")?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
    }, 350);
});
