const Employee = require('./employee');

class Engineer extends Employee {
  constructor(role, name, id, email, github){
    super(role, name, id, email)
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
}

module.exports = Engineer;