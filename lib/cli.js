//  This purpose if the following script is to ingest the user's CLI input.

const inq = require('inquirer');
const fs = require('fs');
const emp = require('./employee');

function cli_input() {
  inq
  .prompt([
  ])
  .then((response) => {
    console.log(response);
    
  })
}

module.exports = {
  cli_input,
}