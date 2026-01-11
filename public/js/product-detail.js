const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  document.getElementById("productDetail").innerText =
    "Không tìm thấy sản phẩm";
  throw new Error("Missing product id");
}

fetch("./src/json/product.json")
  .then(res => res.json())
  .then(products => {
    const product = products.find(p => p.id == id);

    if (!product) {
      document.getElementById("productDetail").innerText =
        "Sản phẩm không tồn tại";
      return;
    }

    document.getElementById("productDetail").innerHTML = `
      <img src="${product.img}" width="300">
      <h1>${product.name}</h1>
      <p>${product.price}</p>
    `;
  });
