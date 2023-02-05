//  This purpose if the following script is to ingest the user's CLI input.

const inq = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

function main() {
  console.log(`\n----------\n`);
  console.log(`Welcome to Jacob's Team Builder Application!\n`);
}

main();