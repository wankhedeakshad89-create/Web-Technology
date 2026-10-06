// getting all inputs and elements
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const successMsg = document.getElementById("successMsg");

// Helper function: Error dikhane ke liye
function setError(inputElement, message) {
  const formGroup = inputElement.parentElement;
  formGroup.className = "form-group error"; // adding error class
  const errorElement = formGroup.querySelector(".error-msg");
  errorElement.innerText = message;
}

// Helper function: Success mark karne ke liye
function setSuccess(inputElement) {
  const formGroup = inputElement.parentElement;
  formGroup.className = "form-group success"; // changing to success
  const errorElement = formGroup.querySelector(".error-msg");
  errorElement.innerText = "";
}

// form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // submit reload rokne ke liye

  var isValid = true; // flag variable

  // 1. Name Validation (conditional statements + regex check)
  const nameValue = fullName.value.trim();
  const nameLetterRegex = /^[a-zA-Z\s]+$/;

  if (nameValue === "" || nameValue == null) {
    setError(fullName, "Full Name is required.");
    isValid = false;
  } else if (nameValue.length < 3) {
    setError(fullName, "Name must be at least 3 characters long.");
    isValid = false;
  } else if (nameLetterRegex.test(nameValue) == false) {
    setError(fullName, "Name can only contain alphabet letters.");
    isValid = false;
  } else {
    setSuccess(fullName);
  }

  // 2. Email Validation using regular expression
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    setError(email, "Email address is required.");
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    setError(email, "Please enter a valid email address.");
    isValid = false;
  } else {
    setSuccess(email);
  }

  // 3. Phone Validation (Regex check + Loop verification)
  const phoneValue = phone.value.trim();
  const phonePattern = /^[0-9]{10}$/;

  if (phoneValue === "") {
    setError(phone, "Phone number is required.");
    isValid = false;
  } else if (!phonePattern.test(phoneValue)) {
    setError(phone, "Please enter a valid 10-digit mobile number.");
    isValid = false;
  } else {
    // manual loop to double check every character is a digit
    var onlyNums = true;
    for (var i = 0; i < phoneValue.length; i++) {
      var ch = phoneValue.charAt(i);
      if (ch < '0' || ch > '9') {
        onlyNums = false;
        break;
      }
    }

    if (onlyNums == false) {
      setError(phone, "Phone must contain numbers only.");
      isValid = false;
    } else {
      setSuccess(phone);
    }
  }

  // 4. Password Validation (length check + uppercase search loop)
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    setError(password, "Password is required.");
    isValid = false;
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 characters.");
    isValid = false;
  } else {
    // loop to verify at least one capital letter exists
    var hasCapital = false;
    for (var j = 0; j < passwordValue.length; j++) {
      if (passwordValue[j] >= 'A' && passwordValue[j] <= 'Z') {
        hasCapital = true;
        break;
      }
    }

    if (!hasCapital) {
      setError(password, "Include at least one uppercase letter (A-Z).");
      isValid = false;
    } else {
      setSuccess(password);
    }
  }

  // 5. Final check and Loop demonstration
  if (isValid == true) {
    successMsg.innerText = "Registration successful!";
    successMsg.style.display = "block";

    // array loop to log entered values
    const allInputs = [fullName, email, phone, password];
    console.log("--- Form Data Submitted ---");
    for (let k = 0; k < allInputs.length; k++) {
      console.log(allInputs[k].id + ": " + allInputs[k].value);
    }

    // timeout reset
    setTimeout(function () {
      form.reset();
      
      // loop to reset styles
      for (const input of allInputs) {
        input.parentElement.className = "form-group";
      }
      successMsg.style.display = "none";
    }, 2500);

  } else {
    successMsg.style.display = "none";
  }
});