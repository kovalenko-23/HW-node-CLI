const fs = require("fs/promises");
const { v4 } = require("uuid");
const listContacts = require("./list");
const filePath = require("../getPath")(__dirname);

async function addContact(name, email, phone) {
  const newContact = { id: v4(), name, email, phone };
  const contacts = await listContacts();
  contacts.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
}

module.exports = addContact;
