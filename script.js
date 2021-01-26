class Player {
  constructor() {
    this.criminalPoints = 3;
    this.bearPoints = 3;
    this.diceNumber1 = document.querySelector(`.dice__number--1`);
    this.diceNumber2 = document.querySelector(`.dice__number--2`);
    this.diceMessage = document.querySelector(`.dice__message`);
    this.diceNumber = document.querySelector(`.dice__pad`);
  }

  doubtBear() {
    this.animateEffect();
    let randomNumber1 = Math.trunc(Math.random() * 6) + 1;
    this.diceNumber1.innerHTML = randomNumber1;
    this.diceNumber2.innerHTML = "";
    this.diceMessage.innerHTML = "";

    if (randomNumber1 <= this.bearPoints) {
      if (this.criminalPoints != 0 && this.bearPoints != 0) {
        this.bearPoints--;
        this.criminalPoints++;
      }

      this.diceMessage.innerHTML = "Great Job!";
    } else {
      if (this.criminalPoints != 0 && this.bearPoints != 0) {
        this.bearPoints++;
        this.criminalPoints--;
      }
      this.diceMessage.innerHTML = "Mistake!";
    }
  }

  doubtCrim() {
    this.animateEffect();
    let randomNumber1 = Math.trunc(Math.random() * 6) + 1;
    this.diceNumber1.innerHTML = randomNumber1;

    this.diceNumber2.innerHTML = "";
    this.diceMessage.innerHTML = "";

    if (randomNumber1 <= this.criminalPoints) {
      if (this.criminalPoints != 0 && this.bearPoints != 0) {
        this.criminalPoints--;
        this.bearPoints++;
      }
      this.diceMessage.innerHTML = "Great Job!";
    } else {
      if (this.criminalPoints != 0 && this.bearPoints != 0) {
        this.criminalPoints++;
        this.bearPoints--;
      }
      this.diceMessage.innerHTML = "Mistake!";
    }
  }

  doubtBearSpecial() {
    this.animateEffect();
    let randomNumber1 = Math.trunc(Math.random() * 6) + 1;
    let randomNumber2 = Math.trunc(Math.random() * 6) + 1;
    this.diceNumber1.innerHTML = randomNumber1;
    this.diceNumber2.innerHTML = randomNumber2;
    this.diceMessage.innerHTML = "";

    if (randomNumber1 <= this.bearPoints || randomNumber2 <= this.bearPoints) {
      if (this.criminalPoints != 0 && this.bearPoints != 0) {
        this.bearPoints--;
        this.criminalPoints++;
      }
      this.diceMessage.innerHTML = "Great Job";
    } else {
      if (this.criminalPoints != 0 && this.bearPoints != 0) {
        this.bearPoints++;
        this.criminalPoints--;
      }
      this.diceMessage.innerHTML = "Mistake!";
    }
  }

  flashback() {
    this.diceNumber1.innerHTML = "";
    this.diceNumber2.innerHTML = "";
    this.diceMessage.innerHTML = "FLASHBACK !";
    this.bearPoints = 2;
    this.criminalPoints = 4;
  }

  honey() {
    this.diceNumber1.innerHTML = "";
    this.diceNumber2.innerHTML = "";
    this.diceMessage.innerHTML = "HMM HONEY !";
    this.criminalPoints = 2;
    this.bearPoints = 4;
  }

  animateEffect() {
    this.diceNumber.classList.add(`animate`);
    setTimeout(() => {
      this.diceNumber.classList.remove(`animate`);
    }, 1000);
  }
}

// Joost

const barryBonds = new Player();

// barry bonds total equipment
const BBPointsEl = document.querySelector(`.player--1 .player__bear-points`);
const BBCrimEl = document.querySelector(`.player--1 .player__criminal-points`);
const BBButtonBear = document.querySelector(`.player--1 .player__btn-bear`);
const BBButtonBearS = document.querySelector(`.player--1 .player__btn-bear--s`);
const BBButtonCrim = document.querySelector(`.player--1 .player__btn-crim`);
const BBButtonFlash = document.querySelector(`.player--1 .player__btn-flash`);
const BBButtonHoney = document.querySelector(`.player--1 .player__btn-honey`);

BBCrimEl.innerHTML = barryBonds.criminalPoints;
BBPointsEl.innerHTML = barryBonds.bearPoints;

BBButtonBear.addEventListener(`click`, (e) => {
  e.preventDefault();
  barryBonds.doubtBear();
  BBPointsEl.innerHTML = barryBonds.bearPoints;
  BBCrimEl.innerHTML = barryBonds.criminalPoints;
});

BBButtonBearS.addEventListener(`click`, (e) => {
  e.preventDefault();
  barryBonds.doubtBearSpecial();
  BBPointsEl.innerHTML = barryBonds.bearPoints;
  BBCrimEl.innerHTML = barryBonds.criminalPoints;
});

BBButtonCrim.addEventListener(`click`, (e) => {
  e.preventDefault();
  barryBonds.doubtCrim();
  BBPointsEl.innerHTML = barryBonds.bearPoints;
  BBCrimEl.innerHTML = barryBonds.criminalPoints;
});

BBButtonFlash.addEventListener(`click`, (e) => {
  e.preventDefault();
  barryBonds.flashback();
  BBPointsEl.innerHTML = barryBonds.bearPoints;
  BBCrimEl.innerHTML = barryBonds.criminalPoints;
});

BBButtonHoney.addEventListener(`click`, (e) => {
  e.preventDefault();
  barryBonds.honey();
  BBPointsEl.innerHTML = barryBonds.bearPoints;
  BBCrimEl.innerHTML = barryBonds.criminalPoints;
});

//  Brett
const grathan = new Player();

// barry bonds total equipment
const gPointsEl = document.querySelector(`.player--2 .player__bear-points`);
const gCrimEl = document.querySelector(`.player--2 .player__criminal-points`);
const gButtonBear = document.querySelector(`.player--2 .player__btn-bear`);
const gButtonBearS = document.querySelector(`.player--2 .player__btn-bear--s`);
const gButtonCrim = document.querySelector(`.player--2 .player__btn-crim`);
const gButtonFlash = document.querySelector(`.player--2 .player__btn-flash`);
const gButtonHoney = document.querySelector(`.player--2 .player__btn-honey`);

gCrimEl.innerHTML = grathan.criminalPoints;
gPointsEl.innerHTML = grathan.bearPoints;

gButtonBear.addEventListener(`click`, (e) => {
  e.preventDefault();
  grathan.doubtBear();
  gPointsEl.innerHTML = grathan.bearPoints;
  gCrimEl.innerHTML = grathan.criminalPoints;
});

gButtonBearS.addEventListener(`click`, (e) => {
  e.preventDefault();
  grathan.doubtBearSpecial();
  gPointsEl.innerHTML = grathan.bearPoints;
  gCrimEl.innerHTML = grathan.criminalPoints;
});

gButtonCrim.addEventListener(`click`, (e) => {
  e.preventDefault();
  grathan.doubtCrim();
  gPointsEl.innerHTML = grathan.bearPoints;
  gCrimEl.innerHTML = grathan.criminalPoints;
});

gButtonFlash.addEventListener(`click`, (e) => {
  e.preventDefault();
  grathan.flashback();
  gPointsEl.innerHTML = grathan.bearPoints;
  gCrimEl.innerHTML = grathan.criminalPoints;
});

gButtonHoney.addEventListener(`click`, (e) => {
  e.preventDefault();
  grathan.honey();
  gPointsEl.innerHTML = grathan.bearPoints;
  gCrimEl.innerHTML = grathan.criminalPoints;
});

//  jan
const jan = new Player();

// barry bonds total equipment
const jPointsEl = document.querySelector(`.player--3 .player__bear-points`);
const jCrimEl = document.querySelector(`.player--3 .player__criminal-points`);
const jButtonBear = document.querySelector(`.player--3 .player__btn-bear`);
const jButtonBearS = document.querySelector(`.player--3 .player__btn-bear--s`);
const jButtonCrim = document.querySelector(`.player--3 .player__btn-crim`);
const jButtonFlash = document.querySelector(`.player--3 .player__btn-flash`);
const jButtonHoney = document.querySelector(`.player--3 .player__btn-honey`);

jCrimEl.innerHTML = jan.criminalPoints;
jPointsEl.innerHTML = jan.bearPoints;

jButtonBear.addEventListener(`click`, (e) => {
  e.preventDefault();
  jan.doubtBear();
  jPointsEl.innerHTML = jan.bearPoints;
  jCrimEl.innerHTML = jan.criminalPoints;
});

jButtonBearS.addEventListener(`click`, (e) => {
  e.preventDefault();
  jan.doubtBearSpecial();
  jPointsEl.innerHTML = jan.bearPoints;
  jCrimEl.innerHTML = jan.criminalPoints;
});

jButtonCrim.addEventListener(`click`, (e) => {
  e.preventDefault();
  jan.doubtCrim();
  jPointsEl.innerHTML = jan.bearPoints;
  jCrimEl.innerHTML = jan.criminalPoints;
});

jButtonFlash.addEventListener(`click`, (e) => {
  e.preventDefault();
  jan.flashback();
  jPointsEl.innerHTML = jan.bearPoints;
  jCrimEl.innerHTML = jan.criminalPoints;
});

jButtonHoney.addEventListener(`click`, (e) => {
  e.preventDefault();
  jan.honey();
  jPointsEl.innerHTML = jan.bearPoints;
  jCrimEl.innerHTML = jan.criminalPoints;
});

//  nick
const nick = new Player();

// barry bonds total equipment
const nPointsEl = document.querySelector(`.player--4 .player__bear-points`);
const nCrimEl = document.querySelector(`.player--4 .player__criminal-points`);
const nButtonBear = document.querySelector(`.player--4 .player__btn-bear`);
const nButtonBearS = document.querySelector(`.player--4 .player__btn-bear--s`);
const nButtonCrim = document.querySelector(`.player--4 .player__btn-crim`);
const nButtonFlash = document.querySelector(`.player--4 .player__btn-flash`);
const nButtonHoney = document.querySelector(`.player--4 .player__btn-honey`);

nCrimEl.innerHTML = nick.criminalPoints;
nPointsEl.innerHTML = nick.bearPoints;

nButtonBear.addEventListener(`click`, (e) => {
  e.preventDefault();
  nick.doubtBear();
  nPointsEl.innerHTML = nick.bearPoints;
  nCrimEl.innerHTML = nick.criminalPoints;
});

nButtonBearS.addEventListener(`click`, (e) => {
  e.preventDefault();
  nick.doubtBearSpecial();
  nPointsEl.innerHTML = nick.bearPoints;
  nCrimEl.innerHTML = nick.criminalPoints;
});

nButtonCrim.addEventListener(`click`, (e) => {
  e.preventDefault();
  nick.doubtCrim();
  nPointsEl.innerHTML = nick.bearPoints;
  nCrimEl.innerHTML = nick.criminalPoints;
});

nButtonFlash.addEventListener(`click`, (e) => {
  e.preventDefault();
  nick.flashback();
  nPointsEl.innerHTML = nick.bearPoints;
  nCrimEl.innerHTML = nick.criminalPoints;
});

nButtonHoney.addEventListener(`click`, (e) => {
  e.preventDefault();
  nick.honey();
  nPointsEl.innerHTML = nick.bearPoints;
  nCrimEl.innerHTML = nick.criminalPoints;
});
