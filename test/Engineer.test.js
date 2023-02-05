const Engineer = require('../lib/Engineer')

describe('Manager', () => {
  it('Creates a new Manager SubClass, from input', () => {

    const results = new Engineer('Bilbo Baggins', '007', 'bilbo@shire.com', 'github');
    
    console.log(results);

    expect(results).toBeInstanceOf(Engineer);
  })

  describe('getRole', () => {
    it('Returns Manager', () => {
      const results = new Engineer('Bilbo Baggins', '007', 'bilbo@shire.com', 'github').getRole();

      console.log(results);

      expect(results).toEqual('Engineer');
    })
  })
});