const Employee = require('./employee');

class Intern extends Employee {
  constructor(role, name, id, email, attrLabel, attr, school){
    super(role, name, id, email, attrLabel, attr)
    this.school = school;
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

  //Satisfies the technical requirment, but creates more work
  getSchool(){
    return this.attr;
  };

  getAttrLabel(){
    return this.attrLabel;
  };

  getAttr(){
    return this.attr;
  }; 
};

module.exports = Intern;