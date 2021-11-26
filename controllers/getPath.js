const path = require("path");

const filePath = (dirName) => {
  const filePath = path.join(dirName, "contacts.json");
  return filePath;
};

module.exports = filePath;
