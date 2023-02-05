class Employee {
  constructor(name, id, email) {
    this.name = name,
    this.id = id,
    this.email = email,
    this.getName = () => {};
    this.getID = () => {};
    this.getEmail = () => {};
    this.getRole = () => {
      return 'Employee'
    };
}}

module.exports = Employee;