import { addRxPlugin, createRxDatabase, RxCollection, RxDatabase } from 'rxdb';
import PouchAdapterMemory from 'pouchdb-adapter-memory';
import * as schemas from './schema';
import * as fixtures from './fixtures';
import { loadCollections, loadFixtures } from './utils';

if (ENV === 'development') {
  addRxPlugin(PouchAdapterMemory);
} else {
  // TODO connect to persistent database in production envs
}

const _database: Promise<RxDatabase> = createRxDatabase({
  name: 'ethcommerce',
  adapter: 'memory',
});

const _collections = loadCollections(_database, schemas);

if (ENV === 'development') {
  loadFixtures(_database, _collections, fixtures);
}

export async function database(): Promise<RxDatabase> {
  return await _database;
}

export async function collection(name: string): Promise<RxCollection> {
  await _database;
  return await _collections[name];
}
