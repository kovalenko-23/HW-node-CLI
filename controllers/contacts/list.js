const fs = require("fs/promises");
const filePath = require("../getPath")(__dirname);

const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const result = JSON.parse(data);
  return result;
};

module.exports = listContacts;
