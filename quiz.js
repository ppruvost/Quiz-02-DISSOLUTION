// =============================
// Initialisation d'EmailJS
// =============================
(function() {
  emailjs.init("TJHX0tkW1CCz7lv7a"); // clé publique EmailJS
})();

// =============================
// Variables globales
// =============================
let user = {
  nom: "",
  prenom: "",
};
let current = 0;
let score = 0;

// =============================
// Vérification du nom/prénom
// =============================
document.getElementById("startQuiz").addEventListener("click", () => {
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();

  if (!nom || !prenom) {
    alert("Merci de renseigner votre nom et prénom avant de commencer.");
    return;
  }

  user.nom = nom;
  user.prenom = prenom;

  document.getElementById("userForm").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  showQuestion();
});

// =============================
// Questions du quiz
// =============================
const questions = [
const questions = [
  {
    question: "1. Que signifie le terme 'dissolution' en chimie ?",
    options: [
      "La transformation d'une substance en gaz",
      "La dispersion d'une substance (soluté) dans un solvant pour former une solution",
      "La séparation d'un mélange par filtration",
      "L'altération d'une substance par chaleur"
    ],
    bonne_reponse: "La dispersion d'une substance (soluté) dans un solvant pour former une solution",
    explication: "La dissolution est le processus par lequel un soluté se disperse à l'échelle moléculaire dans un solvant pour former une solution homogène."
  },
  {
    question: "2. Quel facteur augmente généralement la vitesse de dissolution d'un solide dans un liquide ?",
    options: [
      "Diminuer la température",
      "Augmenter la surface de contact",
      "Réduire l'agitation",
      "Ajouter un gaz"
    ],
    bonne_reponse: "Augmenter la surface de contact",
    explication: "Augmenter la surface de contact (par ex. en broyant le solide) augmente le nombre de sites exposés au solvant et accélère la dissolution. L'agitation aide aussi ; augmenter la température peut l'augmenter pour la plupart des solides."
  },
  {
    question: "3. Qu'est-ce qu'une solution saturée ?",
    options: [
      "Solution contenant plus de soluté que le solvant ne peut dissoudre",
      "Solution qui ne contient aucun soluté",
      "Solution où la vitesse de dissolution égale la vitesse de cristallisation",
      "Solution qui ne change pas de couleur"
    ],
    bonne_reponse: "Solution où la vitesse de dissolution égale la vitesse de cristallisation",
    explication: "Une solution saturée contient la quantité maximale de soluté que le solvant peut dissoudre à une température donnée — à l'équilibre, la vitesse d'entrée de soluté en solution = vitesse de sortie (cristallisation)."
  },
  {
    question: "4. Quelle affirmation sur la solubilité en fonction de la température est souvent vraie pour les solides dans l'eau ?",
    options: [
      "La solubilité diminue toujours avec la température",
      "La solubilité augmente souvent avec la température",
      "La solubilité est indépendante de la température",
      "La solubilité suit une loi linéaire unique"
    ],
    bonne_reponse: "La solubilité augmente souvent avec la température",
    explication: "Pour de nombreux solides, la solubilité augmente avec la température, mais il existe des exceptions. La relation n'est pas universelle ni nécessairement linéaire."
  },
  {
    question: "5. Quel terme décrit la dissolution d'un gaz dans un liquide ?",
    options: ["Ionisation", "Absorption", "Solvatation", "Solubilisation"],
    bonne_reponse: "Solubilisation",
    explication: "On parle souvent de solubilisation ou de dissolution d'un gaz dans un liquide ; la solvatation (ou solvation) décrit l'entourage des molécules/ions par le solvant. Le mot 'absorption' est parfois utilisé mais 'solubilisation' est plus précis."
  },
  {
    question: "6. Laquelle des affirmations suivantes concerne la solvatation ?",
    options: [
      "C'est la formation d'une nouvelle liaison covalente",
      "C'est l'entourage du soluté par des molécules de solvant",
      "C'est l'ionisation complète du solvant",
      "C'est la séparation du soluté en éléments"
    ],
    bonne_reponse: "C'est l'entourage du soluté par des molécules de solvant",
    explication: "La solvatation est le processus par lequel les molécules de solvant s'organisent autour des particules de soluté, stabilisant celles-ci en solution."
  },
  {
    question: "7. Quel est l'effet de l'agitation (remuage) sur la dissolution d'un solide ?",
    options: [
      "Elle ralentit la dissolution",
      "Elle n'a aucun effet",
      "Elle accélère la dissolution en renouvelant la couche limite de solvant",
      "Elle transforme le soluté en solvant"
    ],
    bonne_reponse: "Elle accélère la dissolution en renouvelant la couche limite de solvant",
    explication: "L'agitation renouvelle le solvant près de la surface du soluté, éliminant la couche riche en soluté et augmentant la vitesse de dissolution."
  },
  {
    question: "8. Qu'entend-on par 'dissolution endothermique' ?",
    options: [
      "La dissolution qui libère de la chaleur",
      "La dissolution qui absorbe de la chaleur",
      "La dissolution instantanée",
      "La dissolution qui produit du gaz"
    ],
    bonne_reponse: "La dissolution qui absorbe de la chaleur",
    explication: "Une dissolution endothermique absorbe de la chaleur depuis l'environnement — la température du milieu diminue en dissolvant le soluté."
  },
  {
    question: "9. Quand on ajoute plus de soluté à une solution suprasaturée, que se produit-il typiquement ?",
    options: [
      "Le soluté reste dissous",
      "La solution retourne à l'état saturé par précipitation/cristallisation",
      "La solution devient neutre",
      "La solution explose"
    ],
    bonne_reponse: "La solution retourne à l'état saturé par précipitation/cristallisation",
    explication: "Une solution sursaturée est instable ; l'ajout d'un germe ou d'une perturbation provoque généralement la cristallisation du soluté excédentaire jusqu'à atteindre l'équilibre (saturation)."
  },
  {
    question: "10. Quelle expérience simple permet d'illustrer la dépendance de la dissolution à la surface de contact ?",
    options: [
      "Comparer un sucre en morceaux contre du sucre en poudre dans un verre d'eau",
      "Comparer température de deux eaux distantes",
      "Observer la couleur",
      "Mesurer le pH"
    ],
    bonne_reponse: "Comparer un sucre en morceaux contre du sucre en poudre dans un verre d'eau",
    explication: "Mettre un morceau de sucre et du sucre en poudre dans deux verres d'eau et chronométrer montre que le sucre en poudre (surface plus grande) se dissout plus vite."
  },
  {
    question: "11. Quand on met du sucre dans un café chaud et qu’on remue, que se passe-t-il ?",
    options: [
      "Le sucre fond et disparaît complètement",
      "Le sucre se dissout dans le café et forme une solution sucrée",
      "Le sucre s’évapore",
      "Le sucre reste au fond sans changer"
    ],
    bonne_reponse: "Le sucre se dissout dans le café et forme une solution sucrée",
    explication: "Le sucre se dissout : il se répartit dans le café pour former une solution homogène. Il ne disparaît pas, il est simplement mélangé au niveau moléculaire."
  },
  {
    question: "12. Pourquoi le sucre se dissout plus vite dans de l’eau chaude que dans de l’eau froide ?",
    options: [
      "Parce que les molécules bougent plus vite à chaud",
      "Parce que l’eau chaude a plus de sucre au départ",
      "Parce que le sucre devient liquide",
      "Parce que l’eau chaude pèse plus lourd"
    ],
    bonne_reponse: "Parce que les molécules bougent plus vite à chaud",
    explication: "La chaleur augmente l’agitation des molécules d’eau, ce qui facilite la dispersion du sucre et donc sa dissolution."
  },
  {
    question: "13. Quand on mélange du sel et de l’eau, on obtient :",
    options: ["Un mélange hétérogène", "Une solution homogène", "Un précipité", "Un gaz"],
    bonne_reponse: "Une solution homogène",
    explication: "Le sel se dissout complètement dans l’eau et forme une solution homogène : on ne distingue plus les grains de sel."
  },
  {
    question: "14. Comment peut-on accélérer la dissolution d’un solide dans un liquide ?",
    options: [
      "En remuant, en chauffant, ou en broyant le solide",
      "En ajoutant plus de solide",
      "En laissant reposer sans bouger",
      "En refroidissant le mélange"
    ],
    bonne_reponse: "En remuant, en chauffant, ou en broyant le solide",
    explication: "Remuer, chauffer ou augmenter la surface de contact (broyer) aide à la dissolution en favorisant le contact entre soluté et solvant."
  },
  {
    question: "15. Quand on met trop de sel dans l’eau et qu’il reste au fond, on dit que la solution est :",
    options: ["Diluée", "Saturée", "Concentrée", "Pure"],
    bonne_reponse: "Saturée",
    explication: "Une solution est saturée quand elle contient la quantité maximale de soluté que le solvant peut dissoudre à une température donnée."
  },
  {
    question: "16. Quelle est la différence entre dissoudre et mélanger du sable dans l’eau ?",
    options: [
      "Le sable se dissout aussi vite que le sel",
      "Le sable ne se dissout pas, il reste en suspension",
      "Le sable devient invisible car il disparaît",
      "Le sable se transforme en sel"
    ],
    bonne_reponse: "Le sable ne se dissout pas, il reste en suspension",
    explication: "Le sable ne se dissout pas : il reste visible et se dépose au fond, formant un mélange hétérogène, contrairement au sel ou au sucre."
  },
  {
    question: "17. Le solvant le plus utilisé dans les expériences de dissolution à l’école est :",
    options: ["L’alcool", "L’huile", "L’eau", "L’air"],
    bonne_reponse: "L’eau",
    explication: "L’eau est appelée 'solvant universel' car elle dissout de nombreuses substances et est sûre à manipuler."
  },
  {
    question: "18. Que devient la couleur du soluté lorsqu’il se dissout dans un liquide ?",
    options: [
      "Elle se répartit uniformément dans tout le liquide",
      "Elle disparaît complètement",
      "Elle reste au fond",
      "Elle se transforme en mousse"
    ],
    bonne_reponse: "Elle se répartit uniformément dans tout le liquide",
    explication: "Lorsqu’un soluté coloré (comme de l’encre ou du sirop) se dissout, sa couleur se répartit de manière uniforme dans le liquide, signe que la solution est homogène."
  },
  {
    question: "19. Quand on met une pastille effervescente dans un verre d’eau, que se passe-t-il ?",
    options: [
      "Elle se dissout en produisant un gaz",
      "Elle fond sans réaction",
      "Elle se transforme en glace",
      "Elle devient du sel"
    ],
    bonne_reponse: "Elle se dissout en produisant un gaz",
    explication: "La pastille effervescente se dissout dans l’eau et libère du dioxyde de carbone (CO₂), ce qui provoque le dégagement de bulles caractéristiques."
  },
  {
    question: "20. Pourquoi utilise-t-on parfois de l’eau distillée pour faire des expériences de dissolution ?",
    options: [
      "Parce qu’elle contient déjà beaucoup de sels",
      "Parce qu’elle ne contient pas d’impuretés qui pourraient fausser les résultats",
      "Parce qu’elle chauffe plus vite",
      "Parce qu’elle est plus colorée"
    ],
    bonne_reponse: "Parce qu’elle ne contient pas d’impuretés qui pourraient fausser les résultats",
    explication: "L’eau distillée ne contient pas de sels ni de minéraux dissous, ce qui permet d’étudier plus précisément la dissolution d’un seul soluté sans interférence."
  }
];

// =============================
// Affichage des questions
// =============================
function showQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    let html = `<div class="question">${q.question}</div><div class="options">`;
    q.options.forEach((opt) => {
      html += `<label><input type="radio" name="q" value="${opt}"> ${opt}</label><br>`;
    });
    html += `<button id="submit">Valider</button>`;
    document.getElementById("quiz").innerHTML = html;
    document.getElementById("explication").innerHTML = "";

    document.getElementById("submit").onclick = validateAnswer;
  } else {
    endQuiz();
  }
}

// =============================
// Validation de la réponse
// =============================
function validateAnswer() {
  const selected = document.querySelector('input[name="q"]:checked');
  if (!selected) {
    document.getElementById("explication").innerHTML = "Veuillez sélectionner une réponse.";
    return;
  }

  const reponse = selected.value;
  const q = questions[current];

  if (reponse === q.bonne_reponse) {
    score++;
    document.getElementById("explication").innerHTML = `<span class="success">Bonne réponse !</span> ${q.explication}`;
  } else {
    document.getElementById("explication").innerHTML = `<span class="fail">Mauvaise réponse.</span> ${q.explication}`;
  }

  current++;
  setTimeout(showQuestion, 10000); // 10s avant la question suivante
  if (current >= questions.length) {
  endQuiz();
  return;
}
  document.getElementById("score").innerText = `Score actuel : ${score} / ${questions.length}`;
}

// =============================
// Initialisation EmailJS (à faire une seule fois)
// =============================
(function() {
  emailjs.init("TJHX0tkW1CCz7lv7a"); // ta clé publique
})();

// =============================
// Fin du quiz + Envoi du mail
// =============================
function endQuiz() {
  document.getElementById("quiz").innerHTML = "<strong>Quiz terminé !</strong>";
  document.getElementById("score").innerText = `Résultat final : ${score} / ${questions.length}`;
  document.getElementById("explication").innerHTML = "";

  // Préparation des données à envoyer
  const emailParams = {
    nom: user.nom,
    prenom: user.prenom,
    score: `${score} / ${questions.length}`,
    email: "patrick.pruvost50@gmail.com" // destinataire fixe
  };

  // Envoi via EmailJS
  emailjs
    .send("service_cgh817y", "template_ly7s41e", emailParams)
    .then(() => {
      alert("✅ Résultats envoyés par e-mail !");
    })
    .catch((error) => {
      console.error("❌ Erreur EmailJS :", error);
      alert("Erreur lors de l’envoi : " + JSON.stringify(error));
    });
}



