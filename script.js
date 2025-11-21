// Parallax Effect
document.addEventListener("mousemove", (e) => {
    const img = document.querySelector(".hero-img img");
    img.style.transform = `translate(${e.clientX / 50}px, ${e.clientY / 50}px)`;
});