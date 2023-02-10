const Employee = require('./employee');

class Engineer extends Employee {
  constructor(role, name, id, email, attr, github){
    super(role, name, id, email, attr)
    this.github = github;
  }
  getName(){
    return this.name;
  }

  getID(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getGithub(){
    return this.github;
  }

  getRole(){
      return this.role;
  }

  getAttr(){
    return this.attr;
  } 
}

module.exports = Engineer;