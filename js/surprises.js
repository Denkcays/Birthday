// Безопасная шуточная ошибка: сайт не обращается к файлам устройства.
const dangerButton = document.querySelector("#dangerButton");
const errorOverlay = document.querySelector("#errorOverlay");
const closeError = document.querySelector("#closeError");
const restoreButton = document.querySelector("#restoreButton");

function showFakeError() {
    if (!errorOverlay) return;
    errorOverlay.hidden = false;
    closeError?.focus();
}

function hideFakeError() {
    if (!errorOverlay) return;
    errorOverlay.hidden = true;
    dangerButton?.focus();
}

dangerButton?.addEventListener("click", showFakeError);
closeError?.addEventListener("click", hideFakeError);

// Рикролл открывается только после явного нажатия пользователя.
restoreButton?.addEventListener("click", () => {
    window.open(
        "https://watchbutdonotlearn.github.io/",
        "_blank",
        "noopener,noreferrer"
    );
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && errorOverlay && !errorOverlay.hidden) {
        hideFakeError();
    }
});
