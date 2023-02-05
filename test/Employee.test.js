const Employee = require('../lib/employee')

describe('Employee', () => {
  it('Creates a new Employee class, from input', () => {

    const results = new Employee('Bilbo Baggins', '007', 'bilbo@shire.com');
    
    console.log(results);

    expect(results instanceof Employee);
  })

  describe('getRole', () => {
    it('Returns Employee', () => {
      const results = new Employee('Bilbo Baggins', '007', 'bilbo@shire.com').getRole();

      console.log(results);

      expect(results).toEqual('Employee');
    })
  })
});