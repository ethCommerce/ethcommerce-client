import type { BehaviorSubject } from 'rxjs';
import { collection } from '@/database';

export interface SearchResult {
  title: string;
  description: string;
}

export async function search(): Promise<BehaviorSubject<SearchResult[]>> {
  const vendors = await collection('vendors');

  const query = vendors.find().where('description').regex(/Description 1/)
  
  return query.$;
}
