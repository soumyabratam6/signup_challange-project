function submitForm(event) {
  event.preventDefault();
  const form = event.target.closest("form"); //event.target.closest('form') finds the closest <form> element to the submit button that was clicked
  if (validateEmail() && validatePassword()) {
    if (confirm("Are you sure you want to sign up?")) {
      alert("Successful signup!");
      form.reset();
    } else form.reset();
  }
}

function validateEmailonch() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();

  if (email.length === 0) {
    emailError.textContent = "Email is required";
    emailError.classList.add("error");
    emailError.classList.remove("success");
  } else if (email.length < 3) {
    emailError.textContent = "Please enter atlist 3 characters";
    emailError.classList.add("error");
    emailError.classList.remove("success");
  } else if (!email.includes("@")) {
    emailError.textContent = 'Please include "@"';
    emailError.classList.add("error");
    emailError.classList.remove("success");
  } else if (!email.includes(".")) {
    emailError.textContent = 'Please include "." ';
    emailError.classList.add("error");
    emailError.classList.remove("success");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error");
    emailError.classList.add("success");
  }
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();
  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailError.textContent = "";
    emailError.classList.remove("error");
    emailError.classList.add("success");
    return true;
  } else {
    emailError.textContent =
      'Email must be at least 3 characters long and contain "@" and "."';
    emailError.classList.remove("success");
    emailError.classList.add("error");
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const password = passwordInput.value.trim();
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long";
    return false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error");
    passwordInput.classList.add("success");
    return true;
  }
}

function validatePasswordonch() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const password = passwordInput.value;

  if (password.length === 0) {
    passwordError.textContent = "Password is required";
    passwordError.classList.add("error");
    passwordError.classList.remove("success");
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long";
    passwordError.classList.add("error");
    passwordError.classList.remove("success");
  } else {
    passwordError.textContent = "All good to go";
    passwordError.classList.remove("error");
    passwordError.classList.add("success");
  }
}
