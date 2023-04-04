document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    const input = document.getElementById(
        "numbers-with-slashes"
    ) as HTMLInputElement;
    const messages = document.getElementById("messages") as HTMLDivElement;

    input.addEventListener("keydown", (e: KeyboardEvent) => {
        console.log("keydown", e);
        const allowedKeys = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "/",
            "Backspace",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
        ];
        if (!allowedKeys.includes(e.key)) {
            e.preventDefault();
            messages.innerText = "that wasn't a number or a slash";
            return false;
        } else {
            messages.innerText = "";
        }
    });
});
