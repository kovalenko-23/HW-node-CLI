const fs = require("fs/promises");
const { v4 } = require("uuid");
const path = require("path");
const filePath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(filePath);
  const result = JSON.parse(data);
  return result;
}

async function getContactById(contactId) {
  const data = await listContacts();
  const contact = data.find((contact) => contact.id == contactId);
  if (!contact) {
    return null;
  }
  return contact;
}

async function removeContact(contactId) {
  const data = await listContacts();
  const idx = data.findIndex((item) => item.id == contactId);
  console.log(typeof contactId);

  if (!idx) {
    return null;
  }
  const updatedContacts = data.filter((_, index) => index !== idx);
  await fs.writeFile(filePath, JSON.stringify(updatedContacts));
  return data[idx];
}

async function addContact(name, email, phone) {
  const newContact = { id: v4(), name, email, phone };
  const contacts = await listContacts();
  contacts.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
