// Signup function
function signup(
  username,
  password,
  confirmPassword,
  dob,
  gender,
  contact,
  city,
  role
) {
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  console.log(`Signing up with: 
    Username: ${username}, 
    Password: ${password}, 
    Date of Birth: ${dob}, 
    Gender: ${gender}, 
    Contact: ${contact}, 
    City: ${city}, 
    Role: ${role}`);

  // Call API to sign up the user (if necessary)
}

// Get the form from the page
const signupForm = document.querySelector(".signup-form");

// Add event listener to handle form submission
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("input[name='username']").value;
  const password = document.querySelector("input[name='password']").value;
  const confirmPassword = document.querySelector(
    "input[name='confirmPassword']"
  ).value;
  const dob = document.querySelector("input[name='dob']").value;
  const gender = document.querySelector("select[name='gender']").value;
  const contact = document.querySelector("input[name='contact']").value;
  const city = document.querySelector("input[name='city']").value;
  const role = document.querySelector("select[name='role']").value;

  signup(username, password, confirmPassword, dob, gender, contact, city, role);
});
