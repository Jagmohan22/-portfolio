document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  function filterProjects(category) {
      projectCards.forEach(card => {
          if (category === "all" || card.classList.contains(category)) {
              card.classList.add("show");
          } else {
              card.classList.remove("show");
          }
      });
  }

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          const category = button.getAttribute("data-category");
          filterProjects(category);
      });
  });

  // Show all projects by default
  filterProjects("all");
});
