// cart.js
document.addEventListener("DOMContentLoaded", () => {
  /* ================== STATE ================== */
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productsData = [];

  /* ================== UTILS ================== */
  function priceToNumber(priceStr) {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^\d]/g, ""));
  }

  function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

  /* ================== CART LOGIC ================== */
  function addToCart(product) {
    if (!isLoggedIn()) {
      alert("Vui lòng đăng nhập để sử dụng giỏ hàng");
      return;
    }

    const found = cart.find(item => item.id === product.id);
    if (found) {
      found.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
  }

  /* ================== UI ================== */
  function updateCartUI() {
    if (!isLoggedIn()) return;
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartDropdown = document.getElementById("cartDropdown");

    if (!cartCount || !cartItems || !cartTotal) return;

    let total = 0;
    let count = 0;
    cartItems.innerHTML = "";

    if (cart.length === 0) {
      cartItems.innerHTML =
        "<li style='padding:10px;text-align:center;color:#666'>Giỏ hàng trống</li>";
    } else {
      cart.forEach(item => {
        const price = priceToNumber(item.price);
        total += price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
          <li class="cart-item" style="padding:8px;display:flex;gap:8px">
            <img src="${item.img}" alt="${item.name}" style="width:50px">
            <div style="flex:1">
              <div class="cart-item-name">
                ${item.name}${item.quantity > 1 ? ` <span>x${item.quantity}</span>` : ""}
              </div>
              <div class="cart-item-price">
                ${(price * item.quantity).toLocaleString()}₫
              </div>
            </div>
          </li>
        `;
      });
    }

    cartCount.textContent = count;
    cartTotal.textContent = total.toLocaleString() + "₫";

    if (count > 0) cartDropdown?.classList.add("show");
    else cartDropdown?.classList.remove("show");
  }

  /* ================== CART EVENTS ================== */
  document.getElementById("cartBtn")?.addEventListener("click", () => {
    document.getElementById("cartDropdown")?.classList.toggle("show");
  });

  document.getElementById("clearCart")?.addEventListener("click", () => {
    if (!confirm("Xóa tất cả giỏ hàng?")) return;
    cart = [];
    localStorage.removeItem("cart");
    updateCartUI();
  });

  /* ================== LOAD PRODUCTS ================== */
  function loadProducts() {
    const PRODUCT_JSON = "/public/json/product.json"; // ✅ PATH CHUẨN

    fetch(PRODUCT_JSON)
      .then(res => {
        if (!res.ok) throw new Error("Không load được product.json");
        return res.json();
      })
      .then(products => {
        productsData = products;
        console.log("✅ Products loaded:", productsData.length);
        bindAddButtons();
      })
      .catch(err => {
        console.error("❌ Load product.json failed:", err);
      });
  }

  /* ================== BIND BUTTONS ================== */
  function bindAddButtons() {
    const buttons = document.querySelectorAll(".add-product");
    if (buttons.length === 0) {
      console.warn("⚠️ Không tìm thấy nút .add-product");
      return;
    }

    buttons.forEach(btn => {
      if (btn.dataset.bound) return;

      const id = Number(btn.dataset.id);
      if (!id) {
        console.warn("⚠️ Nút thiếu data-id:", btn);
        return;
      }

      const product = productsData.find(p => p.id === id);
      if (!product) {
        console.warn("❌ Không tìm thấy product id:", id);
        return;
      }

      btn.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
      });

      btn.dataset.bound = "true";
    });
  }

  /* ================== INIT ================== */
  loadProducts();
  updateCartUI();
});
