document.getElementById("clickText").onclick = function() {
    const text = document.getElementById("hiddenText");
    text.style.display = text.style.display === "none" ? "block" : "none";
};
