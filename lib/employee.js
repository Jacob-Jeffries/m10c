class Employee {
  constructor(role, name, id, email, attrLabel, attr) {
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email;
    this.attrLabel = attrLabel;
    this.attr = attr;
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

  getAttrLabel(){
    return this.attrLabel;
  };

  getAttr(){
    return this.attr;
  }; 
};

module.exports = Employee;