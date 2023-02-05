const Employee = require('../lib/employee')

describe('Employee', () => {
  it('Creates a new Employee class.', () => {
    const results = new Employee('Manager', 'Jacob', 'Jeffries', '007', 'email@email.com', '3308');
    console.log(results);
    
    expect(results instanceof Employee);
  })

  it('Should have a postion parameter.', () => {
    const results = new Employee('Manager', 'Jacob', 'Jeffries', '007', 'email@email.com', '3308');

    expect(results.postion).toEqual('Manager');
  })
});