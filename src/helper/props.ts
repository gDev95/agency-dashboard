export function getProperties<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
