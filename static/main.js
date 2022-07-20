function scroll_to_section_1() {
    document.getElementById("about").scrollIntoView({block:"end",behavior:"smooth"});
}
function copy_email_to_clipboard() {
    if (!confirm("Copy E-Mail to clipboard?")) {
        return;
    }
    navigator.clipboard.writeText("yammington.dev@gmail.com");
}

function copy_discord_to_clipboard() {
    if (!confirm("Copy Discord info to clipboard?")) {
        return;
    }
    navigator.clipboard.writeText("Yam#1297");
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);