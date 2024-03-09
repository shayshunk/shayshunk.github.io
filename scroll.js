const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show-text");
      } else {
        entry.target.classList.remove("show-text");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const hiddenTextElements = document.querySelectorAll(".text-fade");
hiddenTextElements.forEach((el) => observer.observe(el));
