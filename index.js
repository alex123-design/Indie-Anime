document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".next");
  const registerButton = document.querySelector(".register");

  nextButton.addEventListener("click", function () {
  window.location.href = 'new-section.html';
});
registerButton.addEventListener("click", function () {
    alert("Register button clicked!");
    // Implement registration logic here
  });
});

