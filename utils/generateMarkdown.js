// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  <!-- WHEN I click on the links in the Table of Contents -->
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)
  - [Contributing](#contributing)
  - [Tests](#tests)
  <!--THEN I am taken to the corresponding section of the README -->
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Questions

  My GitHub Profile ${data.userGithub}

  Contact me through e-mail if you have any other questions ${data.userEmail}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}`;}

export default generateMarkdown;
