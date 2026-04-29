document.getElementById("btn-continuar").addEventListener("click", () => {
  document
    .getElementById("proxima-parte")
    .scrollIntoView({ behavior: "smooth" });
});
const audio = document.getElementById("audio-player");
const btnPlayPause = document.getElementById("btn-play-pause");

btnPlayPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnPlayPause.textContent = "Pause";
  } else {
    audio.pause();
    btnPlayPause.textContent = "Play";
  }
});

const imagens = [
  "src/img/img1.jpeg",
  "src/img/img2.jpeg",
  "src/img/img3.jpeg",
  "src/img/img4.jpeg",
  "src/img/img5.jpeg",
  "src/img/img6.jpeg",
  "src/img/img7.jpeg",
  "src/img/img8.jpeg",
  "src/img/img9.jpeg",
  "src/img/img10.jpeg",
  "src/img/img11.jpeg"
];

let indice = 0;
const img = document.getElementById("imagem-passar");

setInterval(() => {
  img.classList.add("saindo");
  setTimeout(() => {
    indice = (indice + 1) % imagens.length;
    img.src = imagens[indice];
    img.classList.remove("saindo");
    img.classList.add("entrando");
    setTimeout(() => {
      img.classList.remove("entrando");
    }, 700); // Tempo igual ao da transição CSS
  }, 700);
}, 3000);

// ...existing code...

function atualizarTempoJuntos() {
  const inicio = new Date(2024, 1, 12, 0, 0, 0);
  const agora = new Date();
  let diff = agora - inicio;

  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  diff -= anos * (1000 * 60 * 60 * 24 * 365.25);

  const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  diff -= meses * (1000 * 60 * 60 * 24 * 30.44);

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= dias * (1000 * 60 * 60 * 24);

  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff -= horas * (1000 * 60 * 60);

  const minutos = Math.floor(diff / (1000 * 60));
  diff -= minutos * (1000 * 60);

  const segundos = Math.floor(diff / 1000);

  document.getElementById("tempo-juntos").innerHTML = `Estamos juntos há:<br>
    <strong>${anos}</strong> anos,
    <strong>${meses}</strong> meses,
    <strong>${dias}</strong> dias,
    <strong>${horas}</strong> horas,
    <strong>${minutos}</strong> minutos e
    <strong>${segundos}</strong> segundos 💖`;
}

setInterval(atualizarTempoJuntos, 1000);
atualizarTempoJuntos();
