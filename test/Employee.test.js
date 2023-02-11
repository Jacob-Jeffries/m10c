const Employee = require('../lib/employee')

let name = 'Bilbo';
let id = '007';
let email = 'bilbo@shire.com';
let role = 'Employee';
let attrLabel = 'Generic Label';
let attr = 'Generic Attrubute';

let bilbo = new Employee(role, name, id, email, attrLabel, attr);

describe('Employee', () => {
  it('Creates a new Employee class, from input', () => {
    const results = bilbo;
    expect(results).toBeInstanceOf(Employee);
  })

  describe('getName', () =>{
    it(`It returns ${name}`, () => {
      const results = bilbo.getName();
      expect(results).toEqual(name);

    })
  })

  describe('getID', () =>{
    it(`It returns ${id}`, () => {
      const results = bilbo.getID();
      expect(results).toEqual(id);
    })
  })

  describe('getEmal', () =>{
    it(`It returns ${email}`, () => {
      const results = bilbo.getEmail();
      expect(results).toEqual(email);
    })
  })

  describe('getRole', () => {
    it(`It returns ${role}`, () => {
      const results = bilbo.getRole();
      expect(results).toEqual(role);
    })
  })
  
  describe('getAttrLabel', () => {
    it(`It returns ${attrLabel}`, () => {
      const results = bilbo.getAttrLabel();
      expect(results).toEqual(attrLabel);
    })
  })

  describe('getAttr', () => {
    it(`It returns ${attr}`, () => {
      const results = bilbo.getAttr();
      expect(results).toEqual(attr);
    })
  })
});