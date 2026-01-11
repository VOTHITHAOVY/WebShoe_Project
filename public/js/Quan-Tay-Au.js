const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

const images = document.querySelectorAll('#product img');

function changesImages(srcArray) {
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

color1.addEventListener("click", () => {
  changesImages([
    "../../../../public/img/Quan-Tay-Au-1.png",
    "../../../../public/img/Quan-Tay-Au-2.png",
    "../../../../public/img/Quan-Tay-Au-3.png",
    "../../../../public/img/Quan-Tay-Au-4.png",
    "../../../../public/img/Quan-Tay-Au-5.png",
  ]);
});

color2.addEventListener("click", () => {
  changesImages([
    "../../../../public/img/Quan-Tay-Au-Bare-1.png",
    "../../../../public/img/Quan-Tay-Au-Bare-2.png",
    "../../../../public/img/Quan-Tay-Au-Bare-3.png",
    "../../../../public/img/Quan-Tay-Au-Bare-4.png",
    "../../../../public/img/Quan-Tay-Au-Bare-5.png",
  ]);
});

color3.addEventListener("click", () => {
  changesImages([
    "../../../../public/img/Quan-Tay-Au-Xam-1.png",
    "../../../../public/img/Quan-Tay-Au-Xam-2.png",
    "../../../../public/img/Quan-Tay-Au-Xam-3.png",
    "../../../../public/img/Quan-Tay-Au-Xam-4.png",
    "../../../../public/img/Quan-Tay-Au-Xam-5.png",
  ]);
});
