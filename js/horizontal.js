const section = document.querySelector(".horizontal-section");
const scrollContainer = document.querySelector(".horizontal-scroll");

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  const scrollY = window.scrollY;

  const offset = scrollY - sectionTop;

  if (offset >= 0 && offset <= section.offsetHeight) {
    scrollContainer.style.transform = `translateX(-${offset}px)`;
  }
});
