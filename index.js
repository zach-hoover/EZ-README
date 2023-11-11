const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const { writeFile } = require('fs').promises;

const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is your title?',
},
{
  type: 'input',
  name: 'description',
  message: 'Please provide a description?',
},
{
  type: 'input',
  name: 'installation',
  message: 'What are the installation requirements?',
},
{
  type: 'input',
  name: 'usage',
  message: 'Please Provide usage instructions',
},
{
  type: 'input',
  name: 'contributers',
  message: 'Enter the githubs of your contibuters',
},
{
  type: 'input',
  name: 'tests',
  message: 'Enter the tests you have run',
},
{
  type: 'list',
  name: 'license',
  message: 'Choose a license',
  choices: ['MIT', 'GPLv3', 'Apache-2.0', 'N/A'],
},
];


const init = () => {
    inquirer.prompt(questions)
      .then((answers) => writeFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
init();
