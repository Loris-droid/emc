// Variables globales
let effectsRunning = true;
let snowflakeInterval, starInterval, ribbonInterval;

// Fonction pour créer un flocon de neige
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = Math.random() * 10 + 15 + "px";
    snowflake.style.animationDuration = Math.random() * 4 + 4 + "s";
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;

    document.body.appendChild(snowflake);
    snowflake.addEventListener("animationend", () => snowflake.remove());
}

// Fonction pour créer une étoile
function createFallingStar() {
    const star = document.createElement("div");
    star.classList.add("falling-star");
    star.textContent = "🌟";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.fontSize = Math.random() * 20 + 10 + "px";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    star.style.opacity = Math.random();
    document.body.appendChild(star);
    star.addEventListener("animationend", () => star.remove());
}

// Fonction pour créer un nœud 🎀
function createFallingRibbon() {
    const ribbon = document.createElement("div");
    ribbon.classList.add("falling-ribbon");
    ribbon.textContent = "🎀";
    ribbon.style.left = Math.random() * window.innerWidth + "px";
    ribbon.style.fontSize = Math.random() * 20 + 15 + "px";
    ribbon.style.animationDuration = Math.random() * 3 + 3 + "s";
    ribbon.style.opacity = Math.random();
    document.body.appendChild(ribbon);
    ribbon.addEventListener("animationend", () => ribbon.remove());
}

// Démarrer les animations
function startEffects() {
    snowflakeInterval = setInterval(createSnowflake, 500);
    starInterval = setInterval(createFallingStar, 300);
    ribbonInterval = setInterval(createFallingRibbon, 700);
}

// Arrêter les animations
function stopEffects() {
    clearInterval(snowflakeInterval);
    clearInterval(starInterval);
    clearInterval(ribbonInterval);
        // Supprimer tous les flocons, étoiles et nœuds existants pour un arrêt total
        document.querySelectorAll('.snowflake, .falling-star, .falling-ribbon').forEach(el => el.remove());
      }


// Gestion du bouton pause/reprise
document.addEventListener("DOMContentLoaded", () => {
    const toggleEffectsButton = document.getElementById("toggle-effects");

    // Vérifie si le bouton existe
    if (toggleEffectsButton) {
        toggleEffectsButton.addEventListener("click", () => {
            effectsRunning = !effectsRunning; // Inverse l'état
            if (effectsRunning) {
                startEffects();
                toggleEffectsButton.textContent = "Pause Effets";
            } else {
                stopEffects();
                toggleEffectsButton.textContent = "Reprendre Effets";
            }
        });
    }

    // Lancer les effets par défaut
    startEffects();
});