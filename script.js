const reveals = document.querySelectorAll(".reveal");
const year = document.getElementById("year");

if (year) {
  year.textContent = `© ${new Date().getFullYear()} Mayank Aura`;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((element) => observer.observe(element));