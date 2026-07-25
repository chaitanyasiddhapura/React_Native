import Realm from 'realm';

export default class ContactModel extends Realm.Object {}

ContactModel.schema = {
  name: 'Contact',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    phone: 'string',
    email: 'string?',
    deviceId: 'string?', 
  },
};