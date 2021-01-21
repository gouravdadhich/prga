const line = document.querySelector(".line");
const burgir = document.querySelector(".burgir");
const manubar = document.querySelector(".manubar");
const shop = document.querySelector(".shop");
const shopblock = document.querySelector(".shopblock");


burgir.addEventListener('click', () => {
    shopblock.classList.remove("open");
    manubar.classList.toggle("open");
});

shop.addEventListener('mouseover', () => {
    shopblock.classList.toggle("open");
    manubar.classList.remove("open");
});
shopblock.addEventListener('mouseleave', () => {
    shopblock.classList.remove("open");
});

function pralex(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translate(${distance * speed}px)`;

}

window.addEventListener('scroll', function () {
    console.log("yuruu");
    pralex('scro', window.scrollY, 2);
}); 