const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const images = document.querySelectorAll('#product img');
function changesImages(srcArr){
    images.forEach(img =>{
        img.style.opacity = "0";
    });
    setTimeout(()=>{
        images.forEach((img,index)=>{
            img.src = srcArr[index];
            img.style.opacity ="1";
        });
    },400);
}
color1.addEventListener("click",()=>{
    changesImages([
        "../../../../public/img/Polo-White-1.png",
        "../../../../public/img/Polo-White-2.png" ,
        "../../../../public/img/Polo-White-3.png",
        "../../../../public/img/Polo-White-4.png",
        "../../../../public/img/Polo-White-5.png",
    ]);
});
color2.addEventListener("click",()=>{
    changesImages([
        "../../../../public/img/Polo-Blue-1.png",
        "../../../../public/img/Polo-Blue-2.png",
        "../../../../public/img/Polo-Blue-3.png",
        "../../../../public/img/Polo-Blue-4.png",
        "../../../../public/img/Polo-Blue-5.png",
    ]);
});
color3.addEventListener("click",()=>{
    changesImages([
        "../../../../public/img/Polo-Brown-1.png",
        "../../../../public/img/Polo-Brown-2.png",
        "../../../../public/img/Polo-Brown-3.png",
        "../../../../public/img/Polo-Brown-4.png",
        "../../../../public/img/Polo-Brown-5.png",
    ]);
});
color4.addEventListener("click",()=>{
    changesImages([
        "../../../../public/img/Polo-Red-1.png",
        "../../../../public/img/Polo-Red-2.png",
        "../../../../public/img/Polo-Red-3.png",
        "../../../../public/img/Polo-Red-4.png",
        "../../../../public/img/Polo-Red-5.png",
    ]);
});
