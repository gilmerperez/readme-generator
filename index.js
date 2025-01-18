// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    { // WHEN I enter my project title
      // THEN this is displayed as the title of the README
      type: "input",
      name: "title",
      message: "What is the title of your README?"
    },

    { // WHEN I enter a description
      // THEN this information is added to the sections of the README entitled Description
      type: "input",
      name: "description",
      message: "Provide a short description explaining the what, why, and how of your project."
    },

    { // WHEN I enter installation instructions
      // THEN this information is added to the sections of the README entitled Installation
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },

    { // WHEN I enter a usage information
      // THEN this information is added to the sections of the README entitled Usage
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use."
    },

    { // WHEN I enter a contribution guidelines
      // THEN this information is added to the sections of the README entitled Contributing
      type: "input",
      name: "contributing",
      message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so."
    },

    { // WHEN I enter test instructions
      // THEN this information is added to the sections of the README entitled Tests
      type: "input",
      name: "tests",
      message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here."
    },

    { // WHEN I choose a license for my application from a list of options
      // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
      type: "list",
      name: "license",
      message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
      choices: ['MIT License', 'Apache License 2.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'GNU General Public License (GPL) v3']
    },

    { // WHEN I enter my GitHub username
      // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
      type: "input",
      name: "userGithub",
      message: "Please enter your Github Username so others can reach you."
    },

    { // WHEN I enter my email address
      // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
      type: "input",
      name: "userEmail",
      message: "Please enter your E-mail address so others can reach you."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(colors.red("An error occurred while saving the README file."));
      } else {
        console.log(colors.green(`Your README.md file has been generated successfully!`));
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions) // Ask the user questions
      .then((answers) => {
        const markdownContent = generateMarkdown(answers); // Generate markdown content using answers
        writeToFile("README2.md", markdownContent); // Save the markdown content to README2.md
      })
      .catch((error) => {
        console.log("Error during prompts:", error);
      });
  }

// Function call to initialize app
init();