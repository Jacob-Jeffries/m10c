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
      message: 'This is the Manager Posiiton',
      name: 'title',
      choices: ['Manager'],
    },
    {
      type: 'input',
      message: 'Enter the employee\'s first name: ',
      name: 'fname',
    },
    {
      type: 'input',
      message: 'Enter the employ\'s last name: ',
      name: 'lname',
    },
    {
      type: 'input',
      message: 'Enter the employee\'s ID: ',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Enter the employee\'s email address: ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter the employee\'s office number: ',
      name: 'office',
    }
  ])
  .then((response) => {
    console.log(response);
    return response;    
  })
}

getManager();

module.exports = {
  getManager,
}