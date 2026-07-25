import Realm from 'realm';

class ProductModel extends Realm.Object {}

ProductModel.schema = {
  name: 'Product',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    description: 'string?',
    price: 'int',
  },
};

export default ProductModel;