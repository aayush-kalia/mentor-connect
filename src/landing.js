// scripts.js

// Sample Data
const domains = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English Literature",
  "History",
  "Art",
  "Music",
  "Philosophy",
  "Economics",
  "Business Management",
  "Engineering",
  "Medicine",
  "Law",
  "Psychology",
  "Sociology",
  "Environmental Science",
  "Political Science",
  "Statistics",
  "Data Science",
  "Artificial Intelligence",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "Graphic Design",
  "Digital Marketing",
  "Finance",
  "Entrepreneurship",
  "Public Speaking",
  "Project Management",
  "Human Resources",
  "Creative Writing",
  "Photography",
  "Nutrition",
  "Sports Science",
  "Astronomy",
  "Geology",
  "Architecture",
  "Biotechnology",
  "Nanotechnology",
  "Robotics",
  "Telecommunications",
  "Game Development",
  "Mobile App Development",
  "Web Development",
  "Cloud Computing",
  "DevOps",
  "Virtual Reality",
  "Augmented Reality",
  "Quantum Computing",
];

// Populate Domains List
document.addEventListener("DOMContentLoaded", () => {
  const domainsUl = document.getElementById("domains-ul");
  domains.forEach((domain) => {
    const li = document.createElement("li");
    li.textContent = domain;
    domainsUl.appendChild(li);
  });

  // Set Domain Count
  document.getElementById("domain-count").textContent = domains.length;
});

// Sample Mentor Data
const mentors = [
  { name: "Alice Johnson", domain: "Computer Science" },
  { name: "Bob Smith", domain: "Mathematics" },
  { name: "Carol Williams", domain: "Physics" },
  { name: "David Brown", domain: "Chemistry" },
  { name: "Eva Davis", domain: "Biology" },
  { name: "Frank Miller", domain: "English Literature" },
  { name: "Grace Wilson", domain: "History" },
  { name: "Hank Moore", domain: "Art" },
  { name: "Ivy Taylor", domain: "Music" },
  { name: "Jack Anderson", domain: "Philosophy" },
  // Add more mentor objects as needed
];

// Search Functions
function searchByName() {
  const nameInput = document
    .getElementById("search-name")
    .value.trim()
    .toLowerCase();
  if (nameInput === "") {
    alert("Please enter a name to search.");
    return;
  }
  const results = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(nameInput)
  );
  displaySearchResults(results, `Mentors Found for Name "${nameInput}":`);
}

function searchByDomain() {
  const domainInput = document
    .getElementById("search-domain")
    .value.trim()
    .toLowerCase();
  if (domainInput === "") {
    alert("Please enter a domain to search.");
    return;
  }
  const results = mentors.filter((mentor) =>
    mentor.domain.toLowerCase().includes(domainInput)
  );
  displaySearchResults(results, `Mentors Found for Domain "${domainInput}":`);
}

// Display Search Results
function displaySearchResults(results, message) {
  if (results.length === 0) {
    alert("No mentors found.");
    return;
  }
  const resultMessage =
    message + "\n" + results.map((m) => `${m.name} - ${m.domain}`).join("\n");
  alert(resultMessage);
}

// Placeholder Functions for Login/Signup
function showLogin() {
  alert("Login functionality is not implemented yet.");
}

function showSignup() {
  alert("Signup functionality is not implemented yet.");
}
