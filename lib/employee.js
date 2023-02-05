class Employee {
  constructor(obj) {
    this.title = obj.title;
    this.fname = obj.fname;
    this.lname = obj.lname;
    this.id = obj.id;
    this.email = obj.email;
    this.office = obj.office;
  }

  printInfo() {
    console.log(this);
  }
}

module.exports = Employee;