class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// This will create cache
// module.exports = new SuperHero("Batman");

//Export a new instance without caching
module.exports = SuperHero;
