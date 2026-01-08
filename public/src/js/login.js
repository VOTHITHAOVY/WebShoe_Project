/***********************
 * LOGIN.JS – AZCES STORE
 ***********************/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // ================== VALIDATE ==================
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    if (password.length < 4) {
      alert("Mật khẩu phải có ít nhất 4 ký tự!");
      return;
    }

    // ================== LOGIN SUCCESS ==================
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
        name: email.split("@")[0]
      })
    );

    alert("Đăng nhập thành công!");
    window.location.href = "/Myproject/index.html";
  });

  // ================== LOGIN GOOGLE (FAKE) ==================
  document.getElementById("loginGoogle")?.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "google_user@gmail.com",
        name: "Google User"
      })
    );

    alert("Đăng nhập Google thành công!");
    window.location.href = "/Myproject/index.html";
  });

  // ================== LOGIN FACEBOOK (FAKE) ==================
  document.getElementById("loginFacebook")?.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "facebook_user@gmail.com",
        name: "Facebook User"
      })
    );

    alert("Đăng nhập Facebook thành công!");
    window.location.href = "/Myproject/index.html";
  });
});
