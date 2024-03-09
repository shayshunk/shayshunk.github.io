const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const hiddenTextElements = document.querySelectorAll(".hidden");
hiddenTextElements.forEach((el) => observer.observe(el));
