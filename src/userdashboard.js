document.addEventListener("DOMContentLoaded", function () {
  const addCourseBtn = document.getElementById("add-course-btn");
  const coursesList = document.getElementById("courses-list");

  addCourseBtn.addEventListener("click", function () {
    const newCourse = prompt("Enter the name of the new course:");
    if (newCourse) {
      const listItem = document.createElement("li");
      listItem.textContent = newCourse;
      coursesList.appendChild(listItem);
    }
  });

  // Functionality for the "Ask New Query" button
  const newQueryBtn = document.querySelector(".new-query-btn");
  newQueryBtn.addEventListener("click", function () {
    const query = document.getElementById("user-queries").value;
    const newQuery = prompt("Add a new query:");
    if (newQuery) {
      alert(`You asked: ${newQuery}`);
    } else {
      alert("Please select a query.");
    }
  });
});
