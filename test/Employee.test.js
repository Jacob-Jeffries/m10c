const Employee = require('../lib/employee')

let name = 'Bilbo';
let id = '007';
let email = 'bilbo@shire.com';
let role = 'Employee';
let attr = 'Generic Attrubute';

let bilbo = new Employee(role, name, id, email, attr);

describe('Employee', () => {
  it('Creates a new Employee class, from input', () => {
    const results = bilbo;
    // console.log(results);
    expect(results).toBeInstanceOf(Employee);
  })

  describe('getName', () =>{
    it(`It returns ${name}`, () => {
      const results = bilbo.getName();
      // console.log(results);
      expect(results).toEqual(name);

    })
  })

  describe('getID', () =>{
    it(`It returns ${id}`, () => {
      const results = bilbo.getID();
      // console.log(results);
      expect(results).toEqual(id);
    })
  })

  describe('getEmal', () =>{
    it(`It returns ${email}`, () => {
      const results = bilbo.getEmail();
      // console.log(results);
      expect(results).toEqual(email);
    })
  })

  describe('getRole', () => {
    it(`It returns ${role}`, () => {
      const results = bilbo.getRole();
      // console.log(results);
      expect(results).toEqual(role);
    })
  })

  describe('getAttr', () => {
    it(`It returns ${attr}`, () => {
      const results = bilbo.getAttr();
      // console.log(results);
      expect(results).toEqual(attr);
    })
  })
});