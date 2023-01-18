const email = document.getElementById("user_email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "Please enter a legitimate email to proceed. Ex: myemail@example.com"
    );
  } else {
    email.setCustomValidity("");
  }
});
