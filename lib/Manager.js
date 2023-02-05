const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
  }
  getName(){}

  getID(){}

  getEmail(){}

  getRole(){
      return 'Manager'
    }
}

module.exports = Manager;