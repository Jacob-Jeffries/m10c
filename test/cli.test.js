const cli = require('../lib/cli');

describe('cli.js', () =>{
  it('Returns an oobject from an inq prompt', () => {
    const results = cli.getManager();

    expect(results instanceof obj);
  });
});