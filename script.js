// Sélection des éléments
const triggerImage = document.getElementById("trigger-image");
const navbar = document.getElementById("navbar");

// Afficher/masquer la barre de navigation
triggerImage.addEventListener("click", (e) => {
  e.stopPropagation();  // Empêcher la propagation du clic à l'élément parent
  navbar.classList.toggle("visible"); // Ajouter/retirer la classe 'visible'

  // Masquer ou afficher l'image du menu selon l'état de la barre
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
    triggerImage.style.display = "block"; // Réafficher l'image si la barre est fermée
  }
});