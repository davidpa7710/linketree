var container = document.querySelector('.container');

grecaptcha.ready(function() {
    container.addEventListener('submit', function(event) {
      event.preventDefault();
      grecaptcha.execute('6LdxmIIlAAAAAFsXpph_D7uUMmcqXPUS8TBRBGtZ ', {action: 'submit'}).then(function(token) {
        // Add the token to the form data and submit the form
        var formData = new FormData(container);
        formData.append('recaptchaToken', token);
        fetch('/submit-form', {
          method: 'POST',
          body: formData
        }).then(function(response) {
          // Handle the response from the server
        });
      });
    });
  });
  

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
        else if (buttonId === "btn-7") {
            window.open("https://api.whatsapp.com/send?phone=5540947590&text=Hello%20I'm%20[name]%20and%20I'm%20contacting%20you%20for%20[reason%20for%20contact].%20", "_blank");
         }
        else if (buttonId === "btn-5") {
            window.open("mailto:davidpa7710@gmail.com?subject=Contact Request&body=Hello David, my name is [your name] and I would like to contact you for [reason for contact].%0D%0AGreetings, [your name]", "_blank");
        }
        else if (buttonId === "btn-6") {
            window.open("https://open.spotify.com/user/12121438720?si=9d084ad869294411", "_blank");
        }
    }
}

container.addEventListener('click', handleClick);