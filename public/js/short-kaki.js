const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const images = document.querySelectorAll('#product img');
function changesImages(srcArray){
    images.forEach(img =>{
        img.style.opacity = "0";
    });
    setTimeout(()=>{
        images.forEach((img,index)=>{
            img.src = srcArray[index];
            img.style.opacity = "1";
        });
    },400);
}
color1.addEventListener("click", () => {
  changesImages([
    "../../../../public/img/Short-kaki-1.png",
    "../../../../public/img/Short-kaki-2.png",
    "../../../../public/img/Short-kaki-3.png",
    "../../../../public/img/Short-kaki-4.png",
    "../../../../public/img/Short-kaki-5.png",
  ]);
});
color2.addEventListener("click", () => {
  changesImages([
    "../../../../public/img/Short-kaki-Nau-1.png",
    "../../../../public/img/Short-kaki-Nau-2.png",
    "../../../../public/img/Short-kaki-Nau-3.png",
    "../../../../public/img/Short-kaki-Nau-4.png",
    "../../../../public/img/Short-kaki-Nau-5.png",
  ]);
});
color3.addEventListener("click", () => {
  changesImages([
    "../../../../public/img/Short-kaki-Trang-1.png",
    "../../../../public/img/Short-kaki-Trang-2.png",
    "../../../../public/img/Short-kaki-Trang-3.png",
    "../../../../public/img/Short-kaki-Trang-4.png",
    "../../../../public/img/Short-kaki-Trang-5.png",
  ]);
});
color4.addEventListener("click", () => {
  changesImages([
    "../../../../public/img/Short-kaki-Xam-1.png",
    "../../../../public/img/Short-kaki-Xam-2.png",
    "../../../../public/img/Short-kaki-Xam-3.png",
    "../../../../public/img/Short-kaki-Xam-4.png",
    "../../../../public/img/Short-kaki-Xam-5.png",
  ]);
});