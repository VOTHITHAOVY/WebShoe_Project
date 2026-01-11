let products = [];

fetch("/public/json/product.json")
  .then(res => res.json())
  .then(data => {
    products = data;
  });

const input = document.getElementById("searchInput");
const resultBox = document.getElementById("searchResult");

input.addEventListener("input", () => {
  const keyword = input.value.toLowerCase().trim();
  resultBox.innerHTML = "";

  if (keyword === "") {
    resultBox.classList.add("hidden");
    return;
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  if (filtered.length === 0) {
    resultBox.innerHTML = `<p class="p-3 text-gray-500">Không tìm thấy sản phẩm</p>`;
    resultBox.classList.remove("hidden");
    return;
  }

  filtered.forEach(p => {
    resultBox.innerHTML += `
      <a href="${p.page}"
         class="flex items-center gap-3 p-3 hover:bg-gray-100">
        <img src="${p.img}" class="w-12 h-12 rounded object-cover">
        <div>
          <p class="text-sm font-medium">${p.name}</p>
          <p class="text-red-500 text-sm">${p.price}</p>
        </div>
      </a>
    `;
  });
  

  resultBox.classList.remove("hidden");
});

// click ra ngoài thì đóng kết quả
document.addEventListener("click", (e) => {
  if (!e.target.closest(".relative")) {
    resultBox.classList.add("hidden");
  }
});
