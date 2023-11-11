function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }else if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "GPLv3") {
    return "[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache-2.0") {
    return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
  }else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `
This project is licensed under the [${license}](${renderLicenseLink(license)}) License - see the [LICENSE.md](LICENSE.md) file for details.`;
  } else {
    return "N/A";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contirubters

  ${data.contributers}

  ## License

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
