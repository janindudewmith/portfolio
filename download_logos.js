const fs = require('fs');
const path = require('path');
const https = require('https');

// Define the logos to download with their URLs
const logos = [
  // Programming Languages
  { name: 'java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'cpp', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'c', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'javascript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'sql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },

  // Web Technologies
  { name: 'react', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'nodejs', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'mongodb', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'html-css', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'aspnet', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },

  // Tools & Software
  { name: 'matlab', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
  { name: 'proteus', url: 'https://www.labcenter.com/images/logo.png' },
  { name: 'mysql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'github', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'jira', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'arduino', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'vscode', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'intellij', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
  { name: 'postman', url: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'thingsboard', url: 'https://thingsboard.io/images/thingsboard_logo_blue.svg' },
  { name: 'esp', url: 'https://www.espressif.com/sites/all/themes/espressif/logo-black.svg' },
  { name: 'cloudinary', url: 'https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_300/v1/logo/for_white_bg/cloudinary_icon_for_white_bg.png' },
  { name: 'jwt', url: 'https://jwt.io/img/pic_logo.svg' },
  { name: 'multer', url: 'https://avatars.githubusercontent.com/u/3270625?s=200&v=4' },
  { name: 'axios', url: 'https://axios-http.com/assets/logo.svg' },
  { name: 'tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'esp32', url: 'https://www.espressif.com/sites/all/themes/espressif/logo-black.svg' },
  { name: 'mqtt', url: 'https://mqtt.org/assets/img/mqtt-logo.svg' },
  { name: 'embedded-cpp', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg' },
];

// Create directory if it doesn't exist
const logoDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logoDir)) {
  fs.mkdirSync(logoDir, { recursive: true });
}

// Function to download a file
const downloadFile = (url, filePath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filePath}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        console.log(`Redirected: ${url} -> ${response.headers.location}`);
        downloadFile(response.headers.location, filePath)
          .then(resolve)
          .catch(reject);
      } else {
        console.error(`Failed to download ${url}: Status code ${response.statusCode}`);
        reject(new Error(`Failed to download ${url}: Status code ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
};

// Download all logos
const downloadAllLogos = async () => {
  console.log('Starting logo downloads...');

  for (const logo of logos) {
    const filePath = path.join(logoDir, `${logo.name}.svg`);

    try {
      await downloadFile(logo.url, filePath);
    } catch (error) {
      console.error(`Error downloading ${logo.name}: ${error.message}`);
    }
  }

  console.log('All downloads completed!');
};

// Run the download
downloadAllLogos(); 