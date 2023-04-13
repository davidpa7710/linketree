var container = document.querySelector('.container');

function handleClick(event) {
    event.preventDefault();
    var button = event.target.closest('.button');
    if (button) {
        var buttonId = button.id;
        if (buttonId === "btn-1") {
            window.open("https://www.instagram.com/david.pa56/", "_blank");
        } else if (buttonId === "btn-2") {
            window.open("https://twitter.com/davidpa56", "_blank");
        } else if (buttonId === "btn-3") {
            window.open("https://www.linkedin.com/in/davidpacl3097/", "_blank");
        } else if (buttonId === "btn-4") {
            window.open("https://github.com/davidpa7710/", "_blank");
        }
        else if (buttonId === "btn-5") {
            window.open("mailto:davidpa7710@gmail.com?subject=Contact Request&body=Hello David, my name is [your name] and I would like to contact you for [reason for contact].%0D%0AGreetings, [your name]", "_blank");

        }
    }
}

container.addEventListener('click', handleClick);