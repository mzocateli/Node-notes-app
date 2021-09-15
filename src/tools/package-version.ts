import {readFileSync} from 'fs';

export function getPackageVersion(path: string) {
  return JSON.parse(readFileSync(path, {encoding: 'utf-8'}))['version'];
}
