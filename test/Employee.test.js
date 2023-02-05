const Employee = require('../lib/employee')

describe('Employee', () => {
  it('Creates a new Employee class, from input object', () => {

    const results = new Employee('Bilbo Baggins', '007', 'bilbo@shire.com');
    
    console.log(results);

    expect(results instanceof Employee);
  })
});