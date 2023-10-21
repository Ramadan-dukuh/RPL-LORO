const section = document.querySelector("section"),
    overlay = document.querySelector(".overlay"),
    showBtn = document.querySelector(".btn")
    closeBtn = document.querySelector(".close-btn")

    showBtn.addEventListener("click", () => section.classList.add("active"));
    overlay.addEventListener("click", () => section.classList.add("active"));

    closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
        );

const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("nyala") : star.classList.remove("nyala");
        });
    });
});