const colorButtons = document.querySelectorAll("[id^='color']");
const products = document.querySelectorAll(".product-image, .product-card");

let activeColor = null;

colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;

    // 👉 nếu click lại cùng màu → bỏ filter
    if (activeColor === color) {
      products.forEach(p => p.style.display = "");
      activeColor = null;
      return;
    }

    // 👉 click màu mới → lọc theo màu đó
    products.forEach(p => {
      if (p.dataset.color === color) {
        p.style.display = "";
      } else {
        p.style.display = "none";
      }
    });

    activeColor = color;
  });
});
