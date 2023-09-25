let emojis = [
  " 😩 ",
  " 😤 ",
  "  👻  ",
  " 🤡 ",
  "👽 ",
  " 👾 ",
  " 🤖 ",
  " 🎅 ",
  "🐶",
  "🐱 ",
  "🐭 ",
  "🐹",
  " 🐰",
  " 🦊",
  " 🐻",
  " 🐼 ",
  "🐥",
  " 🦆",
  "🦅",
  " 🦉 ",
  "🦇",
  " 🐺",
  " 🐗",
  " 🐴 ",
  " 🧜🏿‍♂️ ",
  " 🧛🏿‍♂️ ",
  " 👼🏿 ",
  " 🤰🏿 ",
  " 👧🏿 ",
  " 🤹🏽‍♂️ ",
  " 👩🏽‍🚀 ",
];

let emoticon1 = document.getElementById("emote1");
let emoticon2 = document.getElementById("emote2");

function attack() {
  let random1 = emojis[Math.floor(Math.random() * emojis.length)];
  let random2 = emojis[Math.floor(Math.random() * emojis.length)];
  emoticon1.textContent = random1;
  emoticon2.textContent = random2;
}

attack();

let refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function () {
  window.location.reload();
});
