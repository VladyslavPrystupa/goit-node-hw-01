const argv = require('yargs').argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updById,
} = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const list = await listContacts();
      return console.table(list);

    case 'get':
      const get = await getContactById(id);
      return console.table(get);

    case 'remove':
      const remove = await removeContact(id);
      return console.table(remove);

    case 'add':
      const add = await addContact(name, email, phone);
      return console.table(add);

    case 'update':
      const update = await updById(id, name, email, phone);
      return console.table(update);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
