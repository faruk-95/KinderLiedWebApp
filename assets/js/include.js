document.addEventListener("DOMContentLoaded", function() {
  // Navbar'ı yükle
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
    });

  // Footer'ı yükle
  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });
});
