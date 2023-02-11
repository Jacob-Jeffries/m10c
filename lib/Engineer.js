const Employee = require('./employee');

class Engineer extends Employee {
  constructor(role, name, id, email, attrLabel, attr, github){
    super(role, name, id, email, attrLabel, attr)
    this.github = github;
  };

  getRole(){
    return this.role;
  };

  getName(){
    return this.name;
  };

  getID(){
    return this.id;
  };

  getEmail(){
    return this.email;
  };

  getGithub(){
    return this.github;
  };

  getAttrLabel(){
    return this.attrLabel;
  };

  getAttr(){
    return this.attr;
  } 
}

module.exports = Engineer;