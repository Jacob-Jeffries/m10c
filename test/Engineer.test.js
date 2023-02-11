const Employee = require('../lib/employee');
const Engineer = require('../lib/Engineer')

let name = 'Bilbo';
let id = '007';
let email = 'bilbo@shire.com';
let github = 'github';
let role = 'Engineer'
let attrLabel = 'GitHub Profile';
let attr = 'Bilbo-Baggins';

let bilbo = new Engineer(role, name, id, email, attrLabel, attr, github);

describe('Engineer', () => {
  it('Creates a new Engineer SubClass, from input', () => {
    expect(bilbo).toBeInstanceOf(Employee);
    expect(bilbo).toBeInstanceOf(Engineer);
  })

  describe('getName', () => {
    it(`It returns ${name}`, () => {
      const results = bilbo.getName();
      expect(results).toEqual(name);
    })
  })

  describe('getID', () => {
    it(`It returns ${id}`, () => {
      const results = bilbo.getID();
      expect(results).toEqual(id);
    })
  })

  describe('getEmail', () => {
    it(`It returns ${email}`, () => {
      const results = bilbo.getEmail();
      expect(results).toEqual(email);
    }) 
  })

  describe('getGithub', () => {
    it(`It returns ${github}`, () => {
      const results = bilbo.getGithub();
      expect(results).toEqual(github);
    }) 
  })

  describe('getRole', () => {
    it('Returns Engineer', () => {
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