const Employee = require('../lib/employee');
const Manager = require('../lib/Manager');

let name = 'Bilbo';
let id = '007';
let email = 'bilbo@shire.com';
let officeNumber = '3308';
let role = 'Manager';
let attrLabel = 'Office Number';
let attr = '3308'

let bilbo = new Manager(role, name, id, email, attrLabel, attr, officeNumber);

describe('Manager', () => {
  it('Creates a new Manager SubClass, from input', () => {
    // console.log(bilbo);
    expect(bilbo).toBeInstanceOf(Employee);
    expect(bilbo).toBeInstanceOf(Manager);
  })

  describe('getName', () => {
    it(`It returns ${name}`, () => {
      const results = bilbo.getName();
      // console.log(results);
      expect(results).toEqual(name);
    })
  })

  describe('getID', () => {
    it(`It returns ${id}`, () => {
      const results = bilbo.getID();
      // console.log(results);
      expect(results).toEqual(id);
    })
  })

  describe('getEmail', () => {
    it(`It returns ${email}`, () => {
      const results = bilbo.getEmail();
      // console.log(results);
      expect(results).toEqual(email);
    }) 
  })

  describe('getOfficeNumber', () => {
    it(`It returns ${officeNumber}`, () => {
      const results = bilbo.getOfficeNumber();
      // console.log(results);
      expect(results).toEqual(officeNumber);
    }) 
  })

  describe('getRole', () => {
    it(`It returns ${role}`, () => {
      const results = bilbo.getRole();
      // console.log(results);
      expect(results).toEqual(role);
    })
  })

  describe('getAttrLabel', () => {
    it(`It returns ${attrLabel}`, () => {
      const results = bilbo.getAttrLabel();
      // console.log(results);
      expect(results).toEqual(attrLabel);
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