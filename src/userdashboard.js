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
    const querySelect = document.getElementById("user-queries");
    const selectedQuery = querySelect.options[querySelect.selectedIndex].text;
    alert(`You asked: ${selectedQuery}`);
  });

  // Chat functionality
  const chatButton = document.getElementById("chat-button");
  const chatSidebar = document.getElementById("chat-sidebar");
  const closeChatButton = document.getElementById("close-chat");

  chatButton.addEventListener("click", function () {
    chatSidebar.style.right = "0"; // Show chat sidebar
  });

  closeChatButton.addEventListener("click", function () {
    chatSidebar.style.right = "-300px"; // Hide chat sidebar
  });

  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const sendMessageButton = document.getElementById("send-message");

  sendMessageButton.addEventListener("click", function () {
    const message = chatInput.value;
    if (message) {
      const messageElement = document.createElement("p");
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatInput.value = ""; // Clear input
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }
  });

  // Chat options functionality
  const chatOptions = document.querySelectorAll(".chat-option");
  chatOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const type = this.getAttribute("data-type");
      chatMessages.innerHTML += (
        <p>
          <strong>
            ${type.charAt(0).toUpperCase() + type.slice(1)} chat activated!
          </strong>
        </p>
      );
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    });
  });
});
