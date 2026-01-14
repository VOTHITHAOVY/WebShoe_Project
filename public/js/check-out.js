document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const itemsBox = document.getElementById("checkoutItems");
    const subtotalBox = document.getElementById("subtotalPrice");
    const totalBox = document.getElementById("totalPrice");
    const summaryTitle = document.getElementById("orderSummaryTitle");
    const discount = 0.15;
    const SHIPPING_FEE = 0.1;
    let subtotal = 0;
  
    if (!itemsBox) return;
  
    // ===== Hiển thị số lượng sản phẩm =====
    let totalQuantity = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity;
    });
  
    if (summaryTitle) {
      summaryTitle.innerHTML = `
        <span class="material-symbols-outlined text-primary">shopping_bag</span>
        Tóm tắt đơn hàng (${totalQuantity})
      `;
    }
  
    // ===== Giỏ hàng trống =====
    if (cart.length === 0) {
      itemsBox.innerHTML = "<p>Giỏ hàng trống</p>";
      subtotalBox.innerText = "0đ";
      totalBox.innerText = "0đ";
      return;
    }
  
    itemsBox.innerHTML = "";
  
    cart.forEach(item => {
      const price = Number(item.price.replace(/[^\d]/g, ""));
      const itemTotal = price * item.quantity;
      subtotal += itemTotal;
  
      itemsBox.innerHTML += `
        <div class="flex gap-4 items-center">
    <div class="relative size-20 rounded-lg overflow-hidden border">
      <img src="${item.img}" class="w-full h-full object-cover">
      <span class="absolute top-0 right-0 bg-primary text-white text-[10px] px-1 rounded-bl">
        x${item.quantity}
      </span>
    </div>

    <div class="flex-1">
      <h3 class="font-bold text-sm">${item.name}</h3>
      <p class="text-primary font-bold">${itemTotal.toLocaleString()}đ</p>

      <!-- ➕➖ -->
      <div class="flex items-center gap-2 mt-1">
        <button onclick="changeQty(${item.id}, -1)" class="px-2 border">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeQty(${item.id}, 1)" class="px-2 border">+</button>
      </div>
    </div>

    <!-- ❌ Xóa -->
    <button style="border:2px solid black; width:30px;background-color:red;color:black;" onclick="removeItem(${item.id})"
      class="text-red-500 font-bold text-lg">
      ✕
    </button>
  </div>
      `;
    });
      const SHIPPING = subtotal * SHIPPING_FEE;
      const discountPrice = subtotal * discount;
    subtotalBox.innerText = subtotal.toLocaleString() + "đ";
    totalBox.innerText = (subtotal + SHIPPING -discountPrice ).toLocaleString() + "đ";
  });
  // add Product
  function changeQty(id, delta) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const item = cart.find(p => p.id === id);
    if (!item) return;
  
    item.quantity += delta;
  
    // nếu số lượng <= 0 → xóa
    if (item.quantity <= 0) {
      cart = cart.filter(p => p.id !== id);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // reload lại checkout
  }

  // remove product
  function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    cart = cart.filter(p => p.id !== id);
  
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }