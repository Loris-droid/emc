// Sélection de l'image déclencheuse et de la barre de navigation
const triggerImage = document.getElementById("trigger-image");
const navbar = document.getElementById("navbar");

// Fonction pour afficher ou masquer la barre de navigation
triggerImage.addEventListener("click", (e) => {
  e.stopPropagation();  // Empêche la propagation du clic à l'élément parent
  navbar.classList.toggle("visible");
});

// Cacher la barre si l'utilisateur clique en dehors de la barre et de l'image
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !triggerImage.contains(e.target)) {
    navbar.classList.remove("visible");
  }
});