class Employee {
  constructor(role, name, id, email, attr) {
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.attr
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

  getRole(){
    return this.role;
  }

  getAttr(){
    return this.attr;
  }  
}

module.exports = Employee;