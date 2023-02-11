// I found the original design of the employee class to be lacking and caused more trouble then required. Since all the employee classes have the same number of attributes it would have been easier to simply use an employee class without subclasses.

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