// licenses
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseType =
    return `##{license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const mit = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
    const isc = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
`;
}

module.exports = generateMarkdown;