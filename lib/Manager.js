const Employee = require('./employee');

class Manager extends Employee {
  constructor(role, name, id, email, officeNumber){
    super(role, name, id, email)
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

  getOfficeNumber(){
    return this.officeNumber;
  }

  getRole(){
      return this.role;
    }
}

module.exports = Manager;