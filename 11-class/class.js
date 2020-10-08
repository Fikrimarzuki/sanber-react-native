class Animal {
  constructor(name, legs, cold_blooded) {
    this._name = name,
    this._legs = legs || 4,
    this._cold_blooded = cold_blooded || false
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
  get legs() {
    return this._legs;
  }
  set legs(val) {
    this._legs = val;
  }
  get cold_blooded() {
    return this._cold_blooded;
  }
  set cold_blooded(val) {
    this._cold_blooded = val;
  }
}

class Frog extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, legs, cold_blooded)
  }

  jump() {
    console.log("hop hop");
  }
}

class Ape extends Animal {
  constructor(name, legs, cold_blooded) {
    super(name, cold_blooded),
    this._legs = legs || 2
  }

  yell() {
    console.log("Auooo");
  }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"


class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    const date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;
    const output = this.template.replace("h", hours).replace("m", mins).replace("s", secs);
    
    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    const timer = setInterval(() => {
      this.render()
    }, 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
