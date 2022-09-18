
const contacts = [{
  id: "1",
  first: "Your",
  last: "Name",
  avatar: "https://placekitten.com/g/200/200",
  twitter: "your_handle",
  notes: "Some notes",
  favorite: true,
}];

export async function getContact(contactId) {
  return contacts.find(item => item.id === contactId);
}

export async function getContacts() {
  return contacts;
}

export async function createContact() {
  contacts.push({
    id: contacts.length + 1 + '',
    first: "Your" + contacts.length,
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  });
  return contacts;
}

export async function updateContact(contactId, payload) {
  let index = contacts.findIndex(item => item.id === contactId);
  payload.id = contactId;
  contacts.splice(index, 1, payload);
  return contacts
}