const Employee = require('./employee');

class Manager extends Employee {
  constructor(role, name, id, email, attrLabel, attr, officeNumber){
    super(role, name, id, email, attrLabel, attr)
    this.officeNumber = officeNumber;
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

  //Satisfies the technical requirment, but creates more work
  getOfficeNumber(){
    return this.officeNumber;
  }

  getRole(){
      return this.role;
  }

  getAttr(){
    return this.attr;
  } 
}

module.exports = Manager;