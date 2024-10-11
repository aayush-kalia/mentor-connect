function showProfileDetails() {
  hideAllSections();
  document.getElementById("profileDetails").style.display = "block";
  setActiveLink(0);
}

function showMentorDetails() {
  hideAllSections();
  document.getElementById("mentorDetails").style.display = "block";
  setActiveLink(1);
}

function showCourses() {
  hideAllSections();
  document.getElementById("coursesSelected").style.display = "block";
  setActiveLink(2);
}

function showActivityLog() {
  hideAllSections();
  document.getElementById("activityLog").style.display = "block";
  setActiveLink(3);
}

function hideAllSections() {
  document.getElementById("profileDetails").style.display = "none";
  document.getElementById("mentorDetails").style.display = "none";
  document.getElementById("coursesSelected").style.display = "none";
  document.getElementById("activityLog").style.display = "none";
}

function setActiveLink(index) {
  const activeItem = document.querySelector(".list-group-item.active");
  if (activeItem) {
    activeItem.classList.remove("active");
  }
  document.querySelectorAll(".list-group-item")[index].classList.add("active");
}

showProfileDetails();
