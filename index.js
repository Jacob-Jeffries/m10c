//  Imported files as global variables
const inq = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Global variables to hold the team name and the team itself
// Using an array for the team, it can be of any size
// Future Upgrade - add a sort funciton to the array: Manager > Engineer> Intern
let team = [];
let name;

// This is the main program function; it calls the main program loop
async function main() {
  clear();
  console.log(`\n                ----------                \n`);
  console.log(`Welcome to Jacob's Team Builder Application!\n`);
  console.log(`         Copyright 2023 Jacob Jeffries      `);
  console.log(`\n                ----------                \n`);

  name = await inq.prompt([
    {
      type: 'input',
      name: 'teamName',
      message : 'Please begin by entering your Team\'s Designation:',
    }
  ])

  console.log(`\nPlease designate a Team Manager:\n`);
  
  // Async and await functions handle my inq promises 
  await createManger('Manager');
  console.log(`\n                ----------                \n`);

  // buildTeam() is the main program loop
  await buildTeam();
  console.log(`\n                ----------                \n`);

  clear();
  console.log(`These are the members of ${name.teamName}:`);
  console.log(team);

  generateHTML(team);
};

// This function clears the terminal screen
function clear(){
  process.stdout.write('\033[2J');
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
}

// This is the principal program loop; team members can continually be created and added to the team array
async function buildTeam() {
  clear();
  console.log(`\n                ----------                \n`);
  console.log(`Welcome to Jacob's Team Builder Application!\n`);
  console.log(`         Copyright 2023 Jacob Jeffries      `);
  console.log(`\n                ----------                \n`);
  console.log(`\n`);
  console.log(`Lets now add the rest of your team members;\nyou may add either a Software Engineer, or an Intern.\n`);
  console.log(`\n                ----------                \n`);

  const query = [
    {
        type: 'list',
        message: `What type of Team Member would you like to add next?`,
        name: 'role',
        choices: ['Engineer', 'Intern', 'Exit'],
    }
  ];

  const role = await inq.prompt(query);

  if(role.role == 'Engineer'){
    await createEngineer(role.role);
    await buildTeam();
  }else if(role.role == 'Intern'){
    await createIntern(role.role);
    await buildTeam();
  }else{
    return;
  };
  // Exiting this loop returns to the main() function and them generates the HTML
  return;
};

// Code function to generate the class Manager
async function createManger(role){
  const data  = await getInfo(role)
  const { a0, a1, a2, a3 } = data;
  const team_member = new Manager(role, a0, a1, a2, 'Office Number', a3, a3);
  team.push(team_member);
  return;
};

// Code function to generate the class Engineer 
async function createEngineer(role){
  const data  = await getInfo(role)
  const { a0, a1, a2, a3 } = data;
  const team_member = new Engineer(role, a0, a1, a2, 'GitHub Profile', a3, a3);
  team.push(team_member);
  return;
};

// Code function to generate the class Intern
async function createIntern(role){
  const data  = await getInfo(role)
  const { a0, a1, a2, a3 } = data;
  const team_member = new Intern(role, a0, a1, a2, 'School', a3, a3);
  team.push(team_member);
  return;
};

// This function gathers user information and returns the inq promise to the specific class generator that called it
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
};

// This function geneartes a 
async function generateHTML(team){
  
  let uniqueAttr = '';
  let card = '';
  
  // This small loop moves through the team array (of any length), and creates a card for each employee
  // This unique functions for each employee class made this more difficult, so I modified what a base employee class is
  // I added attrLabel & attr to hold the unique elements of Manger, Engineer, & Intern 
  team.forEach(element => {

    switch(element.getRole()) {
      case 'Manager':
        uniqueAttr = `${element.getAttrLabel()}: ${element.getOfficeNumber()}`;
        break;
      case 'Engineer':
        uniqueAttr = `GitHub: <a href="https://github.com/${element.getGithub()}" target="_blank">${element.getGithub()}</a>`;
        break;
      case 'Intern':
        uniqueAttr = `${element.getAttrLabel()}: ${element.getSchool()}`;
        break;
      default:
        uniqueAttr = 'Wow Jacob messed up'; 
    };

    let tempCard =
    `
      <div class="card-body">
        <h5 class="card-title">${element.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.getRole()}</h6>
        <hr/>
        <p class="card-text">ID: ${element.getID()}</p>
        <p class="card-text">Email:
         <br/>
          <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>
        <p class="card-text">${uniqueAttr}</p>
      </div>
    `;

    // As the array cycles, an entire div element is concacted to the card variable
    card = card + tempCard;
  });

  const index = `<!DOCTYPE html>

  <html lang="en">
  
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      
      <!--VIEWPORT is a mandatory tag for bootstrap-->
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta author="Jacob Jeffries"/>
      
      <link rel="icon" type="image/x-icon" href="./images/favicon.ico">
  
      <!--reset.css strips the margins and padding from every element (no longer recommended by MDN); normalize.css creates homogeneity between browsers, and style.css adds my own style on top of everything.          https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS-->
  
      <link rel="stylesheet" href="./assets/style/normalize.css"/>
  
      <!--BOOTSTRAP-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      
      <!--MY STYLE-->
      <link rel="stylesheet" href="./assets/style/style.css">
      
      <title>Team ${name.teamName}</title>
    </head>
  
    <body class="min-vh-100">
      <header>
        <h1 id="top" class="row d-flex justify-content-center">Team ${name.teamName}</h1>
        <hr />
      </header>
      
      <br />
      <br />
  
      <main class="d-flex flex-row flex-wrap justify-content-around">
      ${card}
      </main>
      
      <br />
      <br />
  
      <footer >
        <h4 class="row d-flex justify-content-center text-center">
          Jacob's Team Builder Application!
        </br>
          Copyright 2023 Jacob Jeffries
        </h4>
        <p><!--Add Footer Here--></p>
      </footer>
      
      <!--LINK Script Here-->    
      <!--BOOTSTRAP-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  
    </body>
  
  </html>
  `
  // A unique html file is generated for each unique team created
  // This will overwrite a file if the same team name is used twice
  // Futrue work - remove spaces for the team name
  fs.writeFile(`./dist/${name.teamName}.html`, index, (err) =>
    err ? console.error(err) : console.log(`Successfully wrote file.`));

};

// Run my program!
main();