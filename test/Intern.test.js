const Employee = require('../lib/employee');
const Intern = require('../lib/Intern');

let name = 'Bilbo';
let id = '007';
let email = 'bilbo@shire.com';
let school = 'school';
let role = 'Intern'
let attrLabel = 'School';
let attr = 'MSU';

let bilbo = new Intern(role, name, id, email, attrLabel, attr, school);

describe('Intern', () => {
  it('Creates a new Intern SubClass, from input', () => {
    // console.log(bilbo);
    expect(bilbo).toBeInstanceOf(Employee);
    expect(bilbo).toBeInstanceOf(Intern);
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

  describe('getSchool', () => {
    it(`It returns ${school}`, () => {
      const results = bilbo.getSchool();
      // console.log(results);
      expect(results).toEqual(school);
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