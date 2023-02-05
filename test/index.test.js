const Employee = require('../lib/employee')

describe('Employee', () => {
  it('Creates a new Employee class, from input object', () => {
    const obj = {
      title: 'Manager',
      fname: 'Bilbo',
      lname: 'Baggins',
      id: '007',
      office: '1 Baggend Way'
    }

    const results = new Employee(obj);
    console.log(results);

    expect(results instanceof Employee);
  })

  it('Should have a postion parameter.', () => {
    const obj = {
      title: 'Manager',
      fname: 'Bilbo',
      lname: 'Baggins',
      id: '007',
      office: '1 Baggend Way'
    }

    const results = new Employee(obj);

    expect(results.title).toEqual('Manager');
  })
});