// Sélection des éléments
const closeWarningButton = document.getElementById("close-warning");
const warningMessage = document.getElementById("warning");
const triggerImage = document.getElementById("trigger-image");
const navbar = document.getElementById("navbar");

// Afficher/masquer la barre de navigation
triggerImage.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.toggle("visible");

  if (navbar.classList.contains("visible")) {
    triggerImage.style.display = "none"; // Cacher l'image lorsque la barre est visible
  } else {
    triggerImage.style.display = "block"; // Afficher l'image lorsque la barre est cachée
  }
});

// Fermer la barre si on clique en dehors
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !triggerImage.contains(e.target)) {
    navbar.classList.remove("visible");
    triggerImage.style.display = "block";
  }
});

// Fermer l'avertissement au clic sur le bouton
closeWarningButton.addEventListener("click", () => {
  warningMessage.classList.add("hidden");
});
