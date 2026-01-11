function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// ================== LOGIN / SIGNUP ==================
function updateAuthUI() {
  const login = document.getElementById("Login");
  const signin = document.getElementById("Signin");

  if (isLoggedIn()) {
    login?.remove();
    signin?.remove();
  }
}

// ================== HELLO USER ==================
function updateUserUI() {
  const helloUser = document.getElementById("helloUser");
  const menu = document.getElementById("menu");
  const userIcon = document.querySelector(".nav label");

  if (!helloUser || !menu || !userIcon) return;

  if (isLoggedIn()) {
    const user = JSON.parse(localStorage.getItem("user"));

    helloUser.textContent = `Hello, ${user?.name || user?.email}`;
    userIcon.style.display = "inline-flex";
  } else {
    helloUser.textContent = "";
    menu.hidden = true;
    userIcon.style.display = "none";
  }
}

// ================== LOGOUT ==================
function initLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      localStorage.removeItem('cart');
      alert("Bạn đã đăng xuất");
      location.reload();
    });
  }
}
function updateCartVisibility() {
  const cartBtn = document.getElementById("cartBtn");
  const cartDropdown = document.getElementById("cartDropdown");

  if (!cartBtn || !cartDropdown) return;

  if (isLoggedIn()) {
    cartBtn.style.display = "inline-flex";
    cartDropdown.classList.remove("show"); // ✅ để cart.js tự toggle
  } else {
    cartBtn.style.display = "none";
    cartDropdown.classList.remove("show");
  }
}

// ================== INIT ==================
document.addEventListener("DOMContentLoaded", () => {
  updateAuthUI();
  updateUserUI();
  initLogout(); // gắn sự kiện logout sau khi DOM load
  updateCartVisibility();
});

