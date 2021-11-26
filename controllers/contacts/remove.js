const fs = require("fs/promises");
const listContacts = require("./list");
const filePath = require("../getPath")(__dirname);

async function removeContact(contactId) {
  const data = await listContacts();
  const idx = data.findIndex((item) => item.id == contactId);

  if (!idx) {
    return null;
  }
  const updatedContacts = data.filter((_, index) => index !== idx);
  await fs.writeFile(filePath, JSON.stringify(updatedContacts));
  return data[idx];
}

module.exports = removeContact;
