class Hero {
    constructor(weapons) {
      this.weapons = weapons;
    }
    
    HitBySword() {
      if(this.weapons.sword) {
        this.weapons.sword.Hit();  
        return;
      }
      alert(`You don't have a sword`);
    }
    
     BowShoot() {
      if(this.weapons.bow) {
        this.weapons.bow.Shoot();
        return;
      }
      alert(`You don't have a bow`);
    }
    
    CrossBowShoot() {
      if(this.weapons.crossBow) {
        this.weapons.crossBow.Shoot();
        return;
      }
      alert(`You don't have a crossbow`);
    }
}
  
class Sword {
  Hit() {
    alert(`Hit an enemy with a sword`);
  }
}
  
class Bow {
  Shoot() {
    alert(`Shoot an enemy with a bow`);
  }
}
  
let weapons = {
  sword : new Sword(),
  bow : new Bow()
};

hero = new Hero(weapons);
hero.HitBySword();
hero.BowShoot();
hero.CrossBowShoot();