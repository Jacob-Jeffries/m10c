const { it } = require('node:test');
const { describe } = require('yargs');
const Employee = require('../lib/employee')

describe.only('Employee', () => {
  it('Creates a new Employee class, from input', () => {

    const results = new Employee('Bilbo Baggins', '007', 'bilbo@shire.com');
    
    console.log(results);

    expect(results instanceof Employee);
  })

  describe('getName', () =>{
    it('Returns the Eomploy\'s name.' () => {
      const results = new Employee('Bilbo Baggins', '007', 'bilbo@shire.com').getName();

      console.log(results);

      expect(results).toEqual('Bilbo Baggins');

    })
  })

  describe('getRole', () => {
    it('Returns Employee', () => {
      const results = new Employee('Bilbo Baggins', '007', 'bilbo@shire.com').getRole();

      console.log(results);

      expect(results).toEqual('Employee');
    })
  })
});