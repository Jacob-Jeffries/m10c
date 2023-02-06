const Employee = require('./employee');

class Intern extends Employee {
  constructor(role, name, id, email, school){
    super(role, name, id, email)
    this.school = school;
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

  getSchool(){
    return this.school;
  }

  getRole(){
      return this.role;
    }
}

module.exports = Intern;