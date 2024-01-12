let aang = document.querySelector(".aang");
if (aang) {
  aang.addEventListener("click", function () {
    window.location.href = "main.html";
  });
} else {
  console.error("Element with class 'aang' not found");
}
