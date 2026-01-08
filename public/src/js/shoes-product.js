const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

const images = document.querySelectorAll("#product img");

function changeImages(srcArray) {
  // fade out
  images.forEach(img => {
    img.style.opacity = "0";
  });

  setTimeout(() => {
    images.forEach((img, index) => {
      img.src = srcArray[index];
      img.style.opacity = "1";
    });
  }, 400);
}

// Mặc định / màu trắng
color1.addEventListener("click", () => {
  changeImages([
    "../../../assets/img/Air-force-1-2.png",
    "../../../assets/img/Air-force-1-1.png",
    "../../../assets/img/Air-force-1-3.png",
    "../../../assets/img/Air-force-1-4.png",
    "../../../assets/img/Air-force-1-5.png",
  ]);
});

// Màu đen
color2.addEventListener("click", () => {
  changeImages([
    "../../../assets/img/AIr-force-1-black-2.png",
    "../../../assets/img/AIr-force-1-black-1.png",
    "../../../assets/img/AIr-force-1-black-3.png",
    "../../../assets/img/AIr-force-1-black-4.png",
    "../../../assets/img/AIr-force-1-black-5.png",
  ]);
});
