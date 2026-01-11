const cartBtn = document.getElementById("cartBtn");
const cartDropdown = document.getElementById("cartDropdown");

cartBtn.addEventListener("click", () => {
  cartDropdown.classList.toggle("hidden");
});
