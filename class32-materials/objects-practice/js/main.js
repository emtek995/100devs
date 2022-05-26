// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
  constructor(name, role) {
    this._name = name;
    this._job = role;
  }

  get name() {
    return this._name;
  }

  get role() {
    return this._job;
  }

  whoAmI() {
    return `This is ${this._name}, and I do ${this._job}`;
  }
}

class BackEndDev extends Contractor {
  constructor(name, role, project) {
    super(name, role);
    this._project = project;
  }

  get project() {
    return this._project;
  }

  set project(project) {
    if (typeof project !== "string") {
      throw Error("Thats not a project");
    }
    this._project = project;
  }

  whoAmI() {
    return `This is ${this._name}, and I do ${this._job}, on ${this._project}`;
  }
}

class FrontEndDev extends Contractor {
  constructor(name, role, browser) {
    super(name, role);
    this._browser = browser;
  }

  get browser() {
    return this._browser;
  }

  whoAmI() {
    return `This is ${this._name}, and I do ${this._job}, with ${this._browser}`;
  }
}

let me = new FrontEndDev("Ed", "Lead", "Chrome");

me.whoAmI();
