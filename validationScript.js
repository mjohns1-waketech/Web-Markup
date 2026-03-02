// JavaScript code for form validation
document.getElementById("myForm").addEventListener("submit", function (event) {

  // Prevent form from submitting
  event.preventDefault();

  // Retrieve the input field value
  var inputValue = document.getElementById("inputField").value;

  // Regular expression pattern for alphanumeric input
  var regex = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (regex.test(inputValue)) {

    // Valid input: display confirmation and submit the form
    alert(`Success! "${inputValue}" is valid alphanumeric input. Form submitted!`);

  } else {

    // Invalid input: display error message
    alert("Error: Input must contain only letters and numbers (no spaces or special characters).");
    event.preventDefault();
  }

});