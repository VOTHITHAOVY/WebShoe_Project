const CURRENT_PRODUCT_ID = 1; // 🔥 đổi theo trang

fetch("/public/json/product.json")
  .then(res => res.json())
  .then(products => {
    const filtered = products.filter(p => p.id !== CURRENT_PRODUCT_ID);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    renderYouMayLike(shuffled.slice(0, 4));
  });

function renderYouMayLike(list) {
  const box = document.getElementById("youMayLike");
  box.innerHTML = "";

  list.forEach(item => {
    box.innerHTML += `
      <a href="${item.page}">
        <div class="group cursor-pointer">
          <div class="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
            <img 
              src="${item.img}"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="${item.name}"
            />
          </div>

          <h4 class="font-medium text-text-main dark:text-white">
            ${item.name}
          </h4>

          <p class="text-text-secondary dark:text-gray-400 text-sm">
            ${getCategory(item.name)}
          </p>

          <p class="mt-2 font-medium text-text-main dark:text-white">
            ${item.price}
          </p>
        </div>
      </a>
    `;
  });
}

// phân loại đơn giản (tuỳ bạn nâng cấp)
function getCategory(name) {
  if (name.toLowerCase().includes("nike")) return "Giày Nam";
  if (name.toLowerCase().includes("áo")) return "Thời trang";
  return "Sản phẩm";
}