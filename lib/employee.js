class Employee {
  constructor(postion, fname, lname, id, email, office) {
    this.postion = postion;
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.email = email;
    this.office = office;
  }

  printInfo() {
    console.log(this);
  }
}

module.exports = Employee;