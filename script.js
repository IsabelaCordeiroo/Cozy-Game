const form = document.getElementById('quizForm');
const result = document.getElementById('result');

const cozyGames = [
  "Stardew Valley",
  "Animal Crossing: New Horizons",
  "Spiritfarer",
  "Unpacking",
  "A Short Hike",
  "Dorf Romantik",
  "My Time at Portia",
  "Cozy Grove",
  "Garden Paws",
  "Slime Rancher"
];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  let total = 0;

  for (let [key, value] of formData.entries()) {
    total += parseInt(value);
  }

  // Divida por 5 perguntas e arredonde para escolher um jogo
  const avg = Math.round(total / 5);

  // Ajusta para índice de array (0 a 9)
  let index = avg * 2 - 2;
  if (index < 0) index = 0;
  if (index >= cozyGames.length) index = cozyGames.length - 1;

  const selectedGame = cozyGames[index];

  result.textContent = `🎮 Seu jogo cozy ideal é: ${selectedGame}!`;
  result.classList.remove('hidden');
  form.classList.add('hidden');
});
