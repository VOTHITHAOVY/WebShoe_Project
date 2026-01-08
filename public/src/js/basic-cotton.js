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
    "../../../assets/img/Basic-cotton-1.png",
    "../../../assets/img/Basic-cotton-2.png",
    "../../../assets/img/Basic-cotton-3.png",
    "../../../assets/img/Basic-cotton-4.png",
    "../../../assets/img/Basic-cotton-5.png",
  ]);
});

color2.addEventListener("click", () => {
  changesImages([
    "../../../assets/img/Basic-Cotton-nau-1.png",
    "../../../assets/img/Basic-Cotton-nau-2.png",
    "../../../assets/img/Basic-Cotton-nau-3.png",
    "../../../assets/img/Basic-Cotton-nau-4.png",
    "../../../assets/img/Basic-Cotton-nau-5.png",
  ]);
});

color3.addEventListener("click", () => {
  changesImages([
    "../../../assets/img/Basic-Cotton-xanhden-1.png",
    "../../../assets/img/Basic-Cotton-xanhden-2.png",
    "../../../assets/img/Basic-Cotton-xanhden-3.png",
    "../../../assets/img/Basic-Cotton-xanhden-4.png",
    "../../../assets/img/Basic-Cotton-xanhden-5.png",
  ]);
});
