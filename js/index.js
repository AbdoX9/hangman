let letterarry = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let letterscontainer = document.getElementsByClassName("the-letters")[0];
let draw = document.getElementsByClassName("the-draw")[0];
letterarry.forEach((e) => {
  let letterelement = document.createElement("div");
  let letter = document.createTextNode(e);
  letterelement.appendChild(letter);
  letterscontainer.appendChild(letterelement);
  letterelement.className = "LR";
});

const words = {
  People: [
    "Rinni",
    "Mitsuri",
    "Tanaka",
    "Choker",
    "CloudSky",
    "Honk",
    "Mommy",
    "Sora",
    "kAT",
    "Kc",
    "Yuki",
    "Richie",
  ],
  Country: ["Egypt", "Usa", "Malaysia", "Philippines", "Vietnam", "Austria"],
  Manhwa: [
    "second life ranker",
    "Catharsis",
    "Omniscient Reader",
    "Noblesse",
    "The Beginning After The End",
    "Tower Of God",
    "Solo Leveling",
  ],
  ManhwaRelate: ["female lead", "Boy love", "Male Lead"],
};

const wordhints = {
  People: {
    Rinni: "idol of the server",
    Mitsuri: "Goddess of the server",
    Tanaka: "The Beloved Monster",
    Choker: "The M",
    CloudySky: "The nicest person in the server",
    Honk: "Love to cosplay",
    Mommy: "Poitnal tanaka",
    Sora: "the only male vip",
    kAT: "the bl lover",
    Kc: "the emo's lover",
    Yuki: "the emo",
    Richie: "his new account is zoro",
  },
  Country: {
    Egypt: "Start with e and so old country",
    Usa: "Most famous country and its currency is dollar",
    Malaysia:
      "is known for its friendly community and a melting pot of Asia's well-diverse community",
    Philippines:
      "is called Asia's pearl of the orient for the richness of its culture and the beauty of its landscape",
    Vietnam: "The uniqueness of Huế and Hoi An.",
    Austria: "Country and continent",
  },
  Manhwa: {
    "second life ranker": "start with s and end with r",
    Catharsis: "start with c and end with s",
    "Omniscient Reader": "start with o and end with r",
    Noblesse: "Start with N and with e",
    "The Beginning After The End": "start with t and end with d",
    "Tower Of God": "start with t and end with d",
    "Solo Leveling": "start with s and end with g",
  },
  ManhwaRelate: {
    "female lead": "female mc",
    "Boy love": "So famous genere",
    "Male Lead": "male mc",
  },
};

let allkeys = Object.keys(words);

let numberkeys = allkeys.length;
let randomnumberkeys = Math.floor(Math.random() * numberkeys);
let randomnumberkeyselement = document.createElement("span");
let category = document.getElementsByClassName("category")[0];
category.appendChild(randomnumberkeyselement);
let randomvaluekeys = allkeys[randomnumberkeys];
randomnumberkeyselement.innerHTML = randomvaluekeys;
let randomarryvalue = words[randomvaluekeys];
let numbervalue = randomarryvalue.length;
let randomnumbervalue = Math.floor(Math.random() * numbervalue);
let randomvaluevalue = randomarryvalue[randomnumbervalue];
console.log(randomvaluevalue);
console.log(randomnumbervalue);

let arrayword = Array.from(randomvaluevalue);
let wordcontainer = document.getElementsByClassName("guessing-word")[0];
console.log(arrayword);
arrayword.forEach((e) => {
  let wordelement = document.createElement("span");
  wordcontainer.appendChild(wordelement);
  if (e == " ") {
    wordelement.classList.add("emptyletter");
    wordelement.innerHTML = "-";
  }
});
let guessword = document.querySelectorAll(".guessing-word span");
let attempts = 0;
let hint = wordhints[randomvaluekeys][randomvaluevalue];
let hintelement = document.createElement("div");
hintelement.className = "hint";
hintelement.innerHTML = hint;
document.body.appendChild(hintelement);
document.addEventListener("click", (e) => {
  let status = false;
  if (e.target.className == "LR") {
    e.target.classList.add("clicked");
    let chosenW = Array.from(randomvaluevalue.toLowerCase());
    let touchedletter = e.target.innerHTML.toLowerCase();
    chosenW.forEach((a, indexa) => {
      if (a == touchedletter) {
        status = true;
        guessword.forEach((span, spanindex) => {
          if (spanindex == indexa) {
            span.innerHTML = a;
          }
        });
      }
    });
    if (status == false) {
      attempts++;
      draw.classList.add(`wrong-${attempts}`);
      console.log(attempts);
      if (attempts == 6) {
        endgame();
        letterscontainer.classList.add("finished");
      }
    }
  }
});
let closegame = "";
function endgame() {
  let boxgame = document.createElement("div");
  let boxgameLayer = document.createElement("div");
  let boxgameClose = document.createElement("div");
  boxgameClose.innerHTML = "X";
  let textgame = document.createTextNode(
    `Game over, the right word was ${randomvaluevalue}`
  );
  boxgame.appendChild(textgame);
  boxgame.className = "popup";
  boxgameLayer.className = "Layer";
  boxgameClose.className = "close";
  boxgameLayer.appendChild(boxgame);
  boxgameLayer.appendChild(boxgameClose);
  document.body.appendChild(boxgameLayer);
  closegame = document.getElementsByClassName("close")[0];
  closegameX();
}
function closegameX() {
  closegame.addEventListener("click", () => {
    document.getElementsByClassName("Layer")[0].remove();
  });
}
