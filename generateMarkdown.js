

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}

# Table of Contents   
[Username](#username)
- [Description](#description)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Installation](#installation)

## Username 
${data.username}

## Description 
${data.description}

## Usage 
${data.usage}

## License 
${data.license}

## Contributing 
${data.contributing}

## Tests 
${data.tests}

## Installation 
${data.installation};
`;
}

module.exports = generateMarkdown;