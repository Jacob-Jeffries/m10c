const Employee = require('../lib/employee');
const Manager = require('../lib/Intern');
const Intern = require('../lib/Intern');

let name = 'Bilbo';
let id = '007';
let email = 'bilbo@shire.com';
let officeNumber = '3308';
let role = 'Manager'

let bilbo = new Intern(name, id, email, officeNumber);

describe('Manager', () => {
  it('Creates a new Engineer SubClass, from input', () => {
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
});