const logos = [
  "LAKERS",
  "NUGGETS",
  "CLIPPERS",
  "PELICANS",
  "TIMBERWOLVES",
  "CELTICS",
  "HEAT",
  "KNICKS",
  "76ERS",
  "BUCKS",
  "PACERS",
  "CAVALIERS",
  "MAGIC",
  "OKC",
  "SUNS",
];

let logoEl = document.getElementById("final");

function generate() {
  const randomIndex = Math.floor(Math.random() * logos.length);
  const randomLogo = logos[randomIndex];
  logoEl.textContent = randomLogo;
}
