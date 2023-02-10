//  This purpose if the following script is to ingest the user's CLI input.

const inq = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { identifier } = require('@babel/types');

let team = [];

async function main() {
  console.log(`\n                ----------                \n`);
  console.log(`Welcome to Jacob's Team Builder Application!\n`);
  console.log(`         Copyright 2023 Jacob Jeffries      `);
  console.log(`\n                ----------                \n`);

  console.log(`Please begin ny assinging a Team Manager by answering the following prompts:\n`);
  
  await createManger('Manager');

  // console.log(team);
  // console.log(typeof(team[0]));
  // console.log(team[0].getName());

  const role = await buildTeam();
  console.log(role);
}

async function createManger(role){
  const data  = await getInfo(role)
  // console.log(data)
  const { a0, a1, a2, a3 } = data;
  const team_member = new Manager(role, a0, a1, a2, a3);
  team.push(team_member);
  return;
};

async function buildTeam() {
  const query = [
    {
        type: 'list',
        message: `What type of Team Member would you like to add next?`,
        name: 'role',
        choices: ['Engineer', 'Intern', 'Exit'],
    }
  ]

  const role = inq.prompt(query);
  return role;
};

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