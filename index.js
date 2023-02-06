//  This purpose if the following script is to ingest the user's CLI input.

const inq = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { identifier } = require('@babel/types');

async function main() {
  console.log(`\n                ----------                \n`);
  console.log(`Welcome to Jacob's Team Builder Application!\n`);
  console.log(`         Copyright 2023 Jacob Jeffries      `);
  console.log(`\n                ----------                \n`);
  console.log(`\n\nLet's begin by assigning your Team Manager:\n`);

  let man = await getInfo('Manager')
  .then((data) => {
    console.log(data)
    const { a0, a1, a2, a3 } = data;
    return ['Manager', a0, a1, a2, a3];
  });

  console.log(man);

}

function getInfo(role){

  let role_char ='';

  switch(role) {
    case 'Manager':
      role_char = 'Office Number';
      break;
    case 'Engineer':
      role_char = 'GitHub Username';
      break;
    case 'Intern':
      role_char = 'School';
      break;
    default:
      role_char = 'Wow Jacob messed up'; 
  }

  const query = [
    {
      type: 'input',
      message: `What is this employee\'s name?`,
      name: 'a0',
    },
    {
      type: 'input',
      message: 'What is thie employee\'s ID?',
      name: 'a1',
    },
    {
      type: 'input',
      message: 'What is this employee\'s Email?',
      name: 'a2',
    },
    {
      type: 'input',
      message: `What is thie employee\'s ${role_char}?`,
      name: 'a3',
    },
  ];

  return inq.prompt(query);
}

main();