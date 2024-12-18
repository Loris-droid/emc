const closeWarningButton = document.getElementById("close-warning");
const warningMessage = document.getElementById("warning");
const triggerImage = document.getElementById("trigger-image");
const navbar = document.getElementById("navbar");

document.addEventListener("DOMContentLoaded", function () {
  const maxSnowflakes = 50; // Nombre maximum de flocons actifs
  let currentSnowflakes = 0; // Compteur de flocons actifs

  function createSnowflake() {
      if (currentSnowflakes < maxSnowflakes) {
          const snowflake = document.createElement("div");
          snowflake.classList.add("snowflake");
          snowflake.textContent = "❄"; // Symbole du flocon

          // Ajouter des propriétés aléatoires
          snowflake.style.left = Math.random() * window.innerWidth + "px"; // Position horizontale aléatoire
          snowflake.style.fontSize = Math.random() * 10 + 15 + "px"; // Taille aléatoire entre 15px et 25px
          snowflake.style.animationDuration = Math.random() * 4 + 4 + "s"; // Durée de chute aléatoire entre 4 et 8 secondes
          snowflake.style.opacity = Math.random() * 0.7 + 0.3; // Opacité entre 0.3 et 1

          document.body.appendChild(snowflake);
          currentSnowflakes++; // Incrémenter le compteur

          // Supprimer le flocon après la fin de l'animation
          snowflake.addEventListener("animationend", () => {
              snowflake.remove();
              currentSnowflakes--; // Décrémenter le compteur
          });
      }
  }
// Ajout d'étoiles tombantes avec l'émoji 🌟
function createFallingStar() {
  const star = document.createElement('div');
  star.classList.add('falling-star');
  star.textContent = '🌟'; // Utilisation de l'émoji 🌟
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.fontSize = Math.random() * 20 + 10 + 'px'; // Taille entre 10px et 30px
  star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durée entre 2s et 5s
  star.style.opacity = Math.random();
  document.body.appendChild(star);

  // Retirer l'étoile après l'animation
  star.addEventListener('animationend', () => {
      star.remove();
  });
}

// Générer les étoiles à intervalles réguliers
setInterval(createFallingStar, 200);
  // Créer des flocons à un rythme modéré
  setInterval(createSnowflake, 200); // Chaque 200ms, essayer d'ajouter un nouveau flocon
});

window.onload = function () {
  setTimeout(function () {
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
  }, 250);
};

triggerImage.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.toggle("visible");

  if (navbar.classList.contains("visible")) {
    triggerImage.style.display = "none"; 
  } else {
    triggerImage.style.display = "block";
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