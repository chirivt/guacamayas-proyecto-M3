const questions = [
  {
    question: "¿Cuál es la especie de guacamaya más común en Caracas?",
    image: "guaca16.jpg",
    options: ["Guacamaya roja", "Guacamaya azul y amarilla", "Guacamaya verde"],
    answer: "Guacamaya azul y amarilla"
  },
  {
    question: "¿Qué comen principalmente las guacamayas?",
    image: "gua2.jpg",
    options: ["Carne", "Hojas secas", "Frutas y semillas"],
    answer: "Frutas y semillas"
  },
  {
    question: "¿Qué tan longevas pueden ser las guacamayas?",
    image: "guaca17.jpg",
    options: ["5 años", "30 años", "Hasta 60 años o más"],
    answer: "Hasta 60 años o más"
  },
  {
    question: "¿Cuál es una amenaza importante para las guacamayas?",
    image: "guaca18.jpg",
    options: ["El agua", "El viento", "El tráfico ilegal"],
    answer: "El tráfico ilegal"
  },
  {
    question: "¿Dónde anidan comúnmente las guacamayas en Caracas?",
    image: "gua5.jpg",
    options: ["En el suelo", "En huecos de árboles altos", "En nidos de otras aves"],
    answer: "En huecos de árboles altos"
  },
  {
    question: "¿Qué tipo de ave es la guacamaya?",
    image: "gua6.jpg",
    options: ["Acuática", "Rapaz", "Psitácida"],
    answer: "Psitácida"
  },
  {
    question: "¿Cómo se comunican las guacamayas entre ellas?",
    image: "gua11.jpg",
    options: ["Con señales de humo", "Con cantos y gritos", "Con aleteos"],
    answer: "Con cantos y gritos"
  },
  {
    question: "¿Cuál es un comportamiento típico de las guacamayas?",
    image: "gua12.jpg",
    options: ["Son solitarias", "Vuelan solas", "Son sociales y juguetonas"],
    answer: "Son sociales y juguetonas"
  },
  {
    question: "¿Qué hacen las guacamayas con su pico curvo?",
    image: "gua13.jpg",
    options: ["Acariciar", "Romper semillas y trepar", "Llamar a otras aves"],
    answer: "Romper semillas y trepar"
  },
  {
    question: "¿Qué ley protege a las guacamayas en Venezuela?",
    image: "gua14.jpg",
    options: ["Ley de Protección al Patrimonio", "Ley Penal del Ambiente", "Ley de Tránsito Terrestre"],
    answer: "Ley Penal del Ambiente"
  }
];

let index = 0, score = 0;

const $ = id => document.getElementById(id);
const setText = (el, text) => el.textContent = text;

function showQuestion() {
  const q = questions[index];
  setText($("question-text"), q.question);
  $("question-image").src = q.image;
  $("options-container").innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(btn, opt, q.answer);
    $("options-container").appendChild(btn);
  });
}

function checkAnswer(btn, userAns, correctAns) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => b.disabled = true);

  if (userAns === correctAns) {
    btn.style.backgroundColor = "#28a745"; // verde
    score++;
  } else {
    btn.style.backgroundColor = "#dc3545"; // rojo
    buttons.forEach(b => {
      if (b.textContent === correctAns) {
        b.style.backgroundColor = "#28a745";
      }
    });
  }

  setTimeout(() => {
    index++;
    index < questions.length ? showQuestion() : showResult();
  }, 1500);
}

function showResult() {
  $("question-container").classList.add("hidden");
  $("result-container").classList.remove("hidden");
  setText($("score-text"), `Obtuviste ${score} de ${questions.length} puntos`);
  $("whatsapp-share").href = `https://wa.me/?text=${encodeURIComponent(
    `¡Obtuve ${score} de ${questions.length} puntos en la Trivia de Guacamayas! 🦜`
  )}`;
}

function restartQuiz() {
  index = score = 0;
  $("result-container").classList.add("hidden");
  $("question-container").classList.remove("hidden");
  showQuestion();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

showQuestion();
