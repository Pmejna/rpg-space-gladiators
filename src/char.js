class Character {
  constructor(name, race) {
    (this.name = name), (this.race = race);
    this.str,
      this.dex,
      this.int,
      this.spd,
      this.end,
      this.def,
      this.lvl,
      this.hpMax,
      this.manaMax,
      this.energy,
      this.physRes,
      this.poisonRes,
      this.fireRes,
      this.coldRes,
      this.electRes,
      this.magicRes;
  }
}

const rndm = (char, num) => {
  return Math.floor(Math.random() * (num / 100 + char / 2) + 1);
};

const createChar = name => {
  player = new Character();
  player.name = name;
  player.race = race[Math.floor(Math.random() * race.length)];
  player.hpMax = 100;
};

const randEnemy1 = () => {
  let raceLngth = Object.keys(races).length;
  let race = Object.keys(races)[Math.floor(Math.random() * raceLngth)];
  enemy1 = new Character();
  enemy1.name = names[Math.floor(Math.random() * names.length)];
  enemy1.race = `${race}`;
  enemy1.lvl = Math.floor(Math.random() * 100) + 1;
  enemy1.str = (races[race].str / 2) * rndm(enemy1.lvl, races[race].str);
  enemy1.dex = (races[race].dex / 2) * rndm(enemy1.lvl, races[race].dex);
  enemy1.int = (races[race].int / 2) * rndm(enemy1.lvl, races[race].int);
  enemy1.spd = (races[race].spd / 2) * rndm(enemy1.lvl, races[race].spd);
  enemy1.end = (races[race].end / 2) * rndm(enemy1.lvl, races[race].end);
  enemy1.def = (races[race].def / 2) * rndm(enemy1.lvl, races[race].def);
  enemy1.hpMax =
    races[race].hpMax +
    enemy1.end * 2 +
    enemy1.def +
    (enemy1.str + enemy1.dex) * 0.3;
  enemy1.manaMax = races[race].manaMax;
  enemy1.energy = races[race].manaMax;
  enemy1.physRes = races[race].physRes;
  enemy1.poisonRes = races[race].poisonRes;
  enemy1.fireRes = races[race].fireRes;
  enemy1.coldRes = races[race].coldRes;
  enemy1.electRes = races[race].electRes;
  enemy1.magicRes = races[race].magicRes;
};

const randEnemy2 = () => {
  let raceLngth = Object.keys(races).length;
  let race = Object.keys(races)[Math.floor(Math.random() * raceLngth)];
  enemy2 = new Character();
  enemy2.name = names[Math.floor(Math.random() * names.length)];
  enemy2.race = `${race}`;
  enemy2.lvl = Math.floor(Math.random() * 100) + 1;
  enemy2.str = (races[race].str / 2) * rndm(enemy2.lvl, races[race].str);
  enemy2.dex = (races[race].dex / 2) * rndm(enemy2.lvl, races[race].dex);
  enemy2.int = (races[race].int / 2) * rndm(enemy2.lvl, races[race].int);
  enemy2.spd = (races[race].spd / 2) * rndm(enemy2.lvl, races[race].spd);
  enemy2.end = (races[race].end / 2) * rndm(enemy2.lvl, races[race].end);
  enemy2.def = (races[race].def / 2) * rndm(enemy2.lvl, races[race].def);
  enemy2.hpMax =
    races[race].hpMax +
    enemy2.end * 2 +
    enemy2.def +
    (enemy2.str + enemy2.dex) * 0.3;
  enemy2.manaMax = races[race].manaMax;
  enemy2.energy = races[race].manaMax;
  enemy2.physRes = races[race].physRes;
  enemy2.poisonRes = races[race].poisonRes;
  enemy2.fireRes = races[race].fireRes;
  enemy2.coldRes = races[race].coldRes;
  enemy2.electRes = races[race].electRes;
  enemy2.magicRes = races[race].magicRes;
};
