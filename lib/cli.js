//  This purpose if the following script is to ingest the user's CLI input.

const inq = require('inquirer');
const fs = require('fs');
const emp = require('./employee');
const { Console } = require('console');

function getManager() {
  console.log(`\n----------\n`);
  console.log(`Enter the information for your team's manager:\n`);

  inq
  .prompt([
    {
      type: 'checkbox',
      message: 'The first employee w'
    }
    
  ])
  .then((response) => {
    console.log(response);
    
  })
}

module.exports = {
  getManger,
}