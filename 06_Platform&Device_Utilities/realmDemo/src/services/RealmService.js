import Realm from 'realm';
import ProductModel from '../realm/schemas/ProductModel';

const realm = new Realm({
  schema: [ProductModel],
  schemaVersion: 1, 
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 1) {
      const oldObjects = oldRealm.objects('Product');
      const newObjects = newRealm.objects('Product');

      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].id = String(oldObjects[i].id);

        newObjects[i].description = oldObjects[i].description || '';
      }
    }
  },
});

export default {
  getAllProducts: () => realm.objects('Product'),

  addProduct: (product) => {
    realm.write(() => {
      realm.create('Product', product);
    });
  },

  updateProduct: (id, updatedProduct) => {
    const product = realm.objectForPrimaryKey('Product', id);
    if (!product) return;

    realm.write(() => {
      Object.keys(updatedProduct).forEach((key) => {
        if (key !== 'id') {
          product[key] = updatedProduct[key];
        }
      });
    });
  },

  deleteProduct: (id) => {
    const product = realm.objectForPrimaryKey('Product', id);
    if (!product) return;

    realm.write(() => {
      realm.delete(product);
    });
  },
};