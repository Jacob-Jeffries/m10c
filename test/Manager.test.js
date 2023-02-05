const Manager = require('../lib/Manager')

describe('Manager', () => {
  it('Creates a new Manager SubClass, from input', () => {

    const results = new Manager('Bilbo Baggins', '007', 'bilbo@shire.com', '3308');
    
    console.log(results);

    expect(results).toBeInstanceOf(Manager);
  })

  describe('getRole', () => {
    it('Returns Manager', () => {
      const results = new Manager('Bilbo Baggins', '007', 'bilbo@shire.com', '3308').getRole();

      console.log(results);

      expect(results).toEqual('Manager');
    })
  })
});