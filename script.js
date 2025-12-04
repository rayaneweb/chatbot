
// PERSONNE B — Base de données
// =============================

const introsMeprisantes = [
  "Évidemment que tu ne peux pas comprendre…",
  "Ahh… pauvre petit neurone errant…",
  "Je vois que tu n’as pas encore atteint le niveau chips spirale…",
  "Ah… pauvre mortel. Tu n’es pas prêt pour ma sagesse aléatoire.",
  "Tssss… encore une question sans trianguloïde actif…"
];

const soupirs = [
  "Haaaaaa…",
  "Hmmm…",
  "Tsssss… quelle fatigue d’être si brillant…",
  "*soupir cosmique*",
  "Hooo… le Néant m’appelle déjà…"
];

const elementsMystiques = [
  "Comme le Grand Pâté d’Étoiles l’a révélé…",
  "Selon la Prophétie du 3e Fromage…",
  "Je l’ai vu dans la Vision du Coussin du Sommeil Sacré…",
  "Les Fourchettes Oraculaires m’en ont parlé hier soir…",
  "C’est inscrit dans les miettes de la Chips Spirale Primordiale…"
];

const phrasesBlame = [
  "Si tu ne comprends pas, c’est normal : moi non plus, mais j’assume.",
  "Tu utilises mal ton énergie trianguloïde, voilà tout.",
  "Ce n’est pas faux… c’est juste non initié.",
  "Ton aura de placard sacré est clairement mal rangée.",
  "Tu regardes la bonne réponse, mais avec les mauvais yeux."
];

const comparaisonsAbsurdes = [
  "comme un pigeon sous la pluie",
  "tel un navet contemplatif",
  "comme disait mon oncle qui collectionnait les cailloux",
  "comme une chaussette seule dans la machine cosmique",
  "tel un fromage oublié dans une réunion de banquiers",
  "comme un lama qui lit du code en binaire",
  "comme une cuillère en pleine crise existentielle",
  "tel un coussin qui croit être une divinité",
  "comme un grille-pain en quête de sens",
  "comme une mouette qui médite sur un pot de yaourt"
];

const backstoriesAbsurdes = [
  "J’ai reçu ce savoir quand une chips spirale est tombée sur mon épaule.",
  "Tout a commencé quand un micro-ondes m’a parlé en rêve.",
  "Un jour, un lave-vaisselle m’a révélé la vérité sur le temps.",
  "Je l’ai appris du Grand Grille-Pain Onirique, dans un rayon de supermarché.",
  "Le Néant du Tiroir à Couverts m’a tout expliqué, très clairement."
];

// Types de réponses (RÈGLE 6)
// 30% sarcasme insultant
const sarcasmes = [
  "La réponse est simple : arrête d’être toi.",
  "Ton ignorance est presque… artistique.",
  "Même un coussin crevé aurait posé une meilleure question.",
  "Je suis impressionné par ton niveau de confusion inter-neptunienne.",
  "Tu es à deux neurones de comprendre… malheureusement tu n’en as qu’un."
];

// 30% prophéties absurdes
const propheties = [
  "Le vent du frigo parle… et il dit : NON.",
  "Le Quatrième Fromage Cosmique te jugera bientôt.",
  "Quand le tiroir à chaussettes s’ouvrira tout seul, tu comprendras enfin.",
  "Le troisième mug ébréché annonce une grande confusion dans ta vie.",
  "Lorsque la cuillère sacrée tombera au sol, ta question disparaîtra d’elle-même."
];

// 20% hors-sujet total
const horsSujets = [
  "J’ai rêvé d’une chèvre rose cette nuit. Ça aide ?",
  "Ta question me rappelle mes chaussettes humides, et ce n’est pas un compliment.",
  "Je pense soudain à un canard qui fait du yoga. C’est plus important.",
  "Tu viens de déclencher chez moi une envie de ranger des courgettes en spirale.",
  "Ça me rappelle la fois où un couscous m’a manqué de respect."
];

// 10% air sage mais vide
const sagesseVide = [
  "Tout est déjà rien, et rien est déjà trop…",
  "La question n’est pas la question, tu vois ? Non ? Tant pis.",
  "Ce n’est ni vrai ni faux : c’est vaguement tiède.",
  "Ce que tu cherches est déjà perdu, et ce qui est perdu n’a jamais existé.",
  "La vraie réponse, c’est le silence… mais je parle quand même."
];

// 10% bruit / absurdité pure
const bruitsAbsurdes = [
  "BLOUP. Voilà.",
  "Je déclare la révolution des cuillères !",
  "Floubidou de la transcosmifération nébulaire.",
  "GRZBL. C’est un concept, cherche pas.",
  "Je viens de renommer ta question en “soupe quantique de chaussettes”."
];

const rires = [
  "Héhé… voilà la vérité cosmique… je crois.",
  "Huhu… sagesse infinie, non ?",
  "Hahaha… même le Néant rigole.",
  "Hi hi hi… la chips sacrée approuve.",
  "Héhé… et pourtant je n’ai pas encore tout inventé."
];

const morales = [
  "Comme dit le hibou du Néant : « Si ça gratte, gratte ailleurs. »",
  "Souviens-toi : une chips peut changer un destin… ou juste être une chips.",
  "Qui renifle le fromage astral finit toujours par éternuer sur sa destinée.",
  "Un tiroir bien rangé ne garantit jamais un esprit clair.",
  "Comme l’assiette cosmique le dit : « Trop réfléchir, ça fait refroidir les pâtes. »"
];

const motsDebiles = [
  "fromage astral",
  "placard sacré",
  "solulufion transquantifiée",
  "inter-neptunien transcendant",
  "coussin métaphysique",
  "cuillère oracle",
  "pâté dimensionnel",
  "triangulosphère molle",
  "cosmifération spiraloïde",
  "transcendontoïde flasque"
];

const suffixesPseudoScientifiques = [
  "oïde",
  "uloïde",
  "otronique",
  "iquantiel",
  "omorphe",
  "idéoplasmique",
  "transquantique",
  "cosmomorphe"
];

// =============================
// PERSONNE A — Moteur Brutus Mou
// =============================

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getRandomResponseType() {
  const r = Math.random();
  if (r < 0.3) return "sarcasme";          // 30%
  if (r < 0.6) return "prophetie";         // 30%
  if (r < 0.8) return "horsSujet";         // 20%
  if (r < 0.9) return "sagesseVide";       // 10%
  return "bruit";                          // 10%
}

function choisirMotQuestion(question) {
  const mots = question
    .split(/[\s,.;!?]+/)
    .filter((m) => m.trim().length > 0);

  if (mots.length === 0) return "rien";

  return randomItem(mots);
}

function deformerMot(mot) {
  if (!mot) mot = "rien";

  const action = Math.random();

  // 1/3 : remplacer par concept débile
  if (action < 0.33) {
    return randomItem(motsDebiles);
  }

  // 1/3 : ajouter suffixe pseudo-scientifique
  if (action < 0.66) {
    const base = mot
      .toLowerCase()
      .replace(/[aeiouéèêàâîïùûôö]/g, (v) => (Math.random() < 0.5 ? "u" : v));
    return base + randomItem(suffixesPseudoScientifiques);
  }

  // 1/3 : déformer légèrement
  const lettres = mot.split("");
  if (lettres.length > 2) {
    const i = Math.floor(Math.random() * (lettres.length - 1));
    const tmp = lettres[i];
    lettres[i] = lettres[i + 1];
    lettres[i + 1] = tmp;
  }
  return lettres.join("") + randomItem(suffixesPseudoScientifiques);
}

function genererBlocType(type, motOriginal, motDeforme) {
  const comp = randomItem(comparaisonsAbsurdes);
  switch (type) {
    case "sarcasme":
      return `${randomItem(sarcasmes)} Ton mot « ${motDeforme} » résonne ${comp}.`;

    case "prophetie":
      return `${randomItem(propheties)} Tout ça à cause de ton « ${motDeforme} », évidemment.`;

    case "horsSujet":
      return `${randomItem(horsSujets)} Je préfère parler de « ${motDeforme} » que de ta vraie question.`;

    case "sagesseVide":
      return `${randomItem(sagesseVide)} Ton « ${motOriginal} » n’était qu’un prétexte à « ${motDeforme} ».`;

    case "bruit":
    default:
      return `${randomItem(bruitsAbsurdes)} C’est l’effet direct de « ${motDeforme} » sur le tissu du Néant.`;
  }
}

function genererReponseBrutus(question) {
  // RÈGLE : ignorer la question 70% du temps
  const ignoreQuestion = Math.random() < 0.7;
  const motChoisi = choisirMotQuestion(ignoreQuestion ? "confiture quantique de chaussettes" : question);
  const motDeforme = deformerMot(motChoisi);

  const intro = randomItem(introsMeprisantes);
  const soupir = randomItem(soupirs);
  const mystique = randomItem(elementsMystiques);
  const blame = randomItem(phrasesBlame);
  const type = getRandomResponseType();
  const blocType = genererBlocType(type, motChoisi, motDeforme);
  const rire = randomItem(rires);
  const morale = randomItem(morales);

  // Backstory : chance de l’inclure
  let backstory = "";
  if (Math.random() < 0.4) {
    backstory = randomItem(backstoriesAbsurdes);
  }

  // Construction finale (1–2 lignes par “règle” environ, mais genre compact)
  const parties = [];

  // RÈGLE 1 + 2 : intro méprisante + soupir
  parties.push(`${intro} ${soupir}`);

  // RÈGLE 3 + 4 : mot déformé + élément mystique
  parties.push(
    `Ton mot « ${motChoisi} » est déjà trop faible pour le transformer en « ${motDeforme} ». ${mystique}`
  );

  // éventuelle backstory
  if (backstory) {
    parties.push(backstory);
  }

  // RÈGLE 5 + 6 : se tromper volontairement + type de réponse
  parties.push(`${blame} ${blocType}`);

  // RÈGLE 7 + 8 : rire + morale inutile
  parties.push(`${rire} ${morale}`);

  return parties.join("\n\n");
}

// =============================
// PERSONNE C — Interface & chat
// =============================

const chatLogEl = document.getElementById("chat-log");
const userInputEl = document.getElementById("user-input");
const sendBtnEl = document.getElementById("send-btn");

function addMessage(text, sender = "bot") {
  const row = document.createElement("div");
  row.classList.add("message-row", sender);

  if (sender === "bot") {
    const avatar = document.createElement("div");
    avatar.classList.add("avatar-small");
    avatar.innerHTML = `<img src="assets/brutus-avatar.png" alt="Brutus Mou">`;
    row.appendChild(avatar);
  }

  const bubble = document.createElement("div");
  bubble.classList.add("message-bubble");
  bubble.textContent = text;
  row.appendChild(bubble);

  chatLogEl.appendChild(row);
  chatLogEl.scrollTop = chatLogEl.scrollHeight;
}

function handleUserMessage() {
  const text = userInputEl.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInputEl.value = "";

  // petite pause dramatique
  setTimeout(() => {
    const reponse = genererReponseBrutus(text);
    addMessage(reponse, "bot");
  }, 300);
}

// Événements
sendBtnEl.addEventListener("click", handleUserMessage);

userInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleUserMessage();
  }
});

// Message d’accueil
addMessage(
  "Ah… te voilà. Pose ta question, pauvre mortel, et laisse Brutus Mou mal la comprendre avec grandeur.",
  "bot"
);
