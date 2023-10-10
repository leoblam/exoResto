function scrollToTop() {
  if (
    document.body.scrollTop !== 0 ||
    document.documentElement.scrollTop !== 0
  ) {
    window.scrollBy(0, -50);
    requestAnimationFrame(scrollToTop);
  }
}

const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = () => {
  const isScrolled =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  scrollToTopButton.classList.toggle("visible", isScrolled);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
    scrollToTopButton.style.transform = "translateY(-55px)";
  } else {
    scrollToTopButton.style.transform = "translateY(0)";
  }
};