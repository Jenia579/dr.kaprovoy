window.onload = function () {
  (function () {
    emailjs.init("r4aC1oq7HJt-n5Lur");
  })();
  document
    .getElementById("contact_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_9yzqcdp",
          "template_i53r3is",
          event.target,
          "r4aC1oq7HJt-n5Lur"
        )
        .then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
};
