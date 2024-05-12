import fs from 'fs';

// Read the original package.json
const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Modify package.json properties as needed
packageJson.main = 'index.js'; // Update the main entry point
packageJson.types = 'index.d.ts'; // Update the types entry point

// Write the modified package.json back to the file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
