# Professional README Generator

## Project Overview

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

This project was designed to create a command-line application that dynamically generates a professional `README.md` file from a user's input using the Inquirer package.

## Table of Contents

- [Usage](#usage)
- [Instructions](#instructions)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Additional Resources](#additional-resources)

## Usage

To start the application, run the following command in your terminal:

```bash
node index.js
```

## Instructions

1. The application prompts the user for details such as the project title, description, installation instructions, usage information, contribution guidelines, test instructions, GitHub username, and email address.

2. After collecting this information, it generates a professional README.md file in the specified format.

## Key Features

* Adds a badge for the selected license.
* Dynamically generates a README.md file based on user input.
* Links the Table of Contents to corresponding sections in the README.
* Includes sections such as Description, Installation, Usage, License, Contributing, Tests, and Questions.

## Technology Stack

This application needs the following tools and technologies to operate:
* **inquirer** for collecting user input.
* **Node.js** for executing the command-line application.
* **File system** access to generate and save the `README.md` file.


## Additional Resources

The Generated sample README file is located in the output folder

Learn more about how to use inquirer for collecting user input: [Inquirer.js Documentation](https://www.npmjs.com/package/inquirer)

As a reminder of everything that a high-quality, professional README should contain: [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) 
