export function search(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle);
}
