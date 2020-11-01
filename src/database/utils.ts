import type { RxCollection, RxDatabase } from 'rxdb';
import { plural } from '@/util/string';

export function loadCollections(
  database: Promise<RxDatabase>,
  schemas: Record<string, any>
): Record<string, Promise<RxCollection>> {
  const collections = {};

  for (const key of Object.keys(schemas)) {
    const collectionName = plural(key).toLowerCase();

    database.then((db) => {
      collections[collectionName] = db.collection({
        name: collectionName,
        schema: schemas[key],
      });
    });
  }

  return collections;
}

export async function loadFixtures(
  database: Promise<RxDatabase>,
  collections: Record<string, Promise<RxCollection>>,
  fixtures: Record<string, any[]>
): Promise<any[]> {
  await database;

  const records = [];

  for (const key of Object.keys(fixtures)) {
    const collection = await collections[key];

    for (const document of fixtures[key]) {
      const record = collection.insert(document);
      records.push(record);
    }
  }

  return Promise.all(records);
}
