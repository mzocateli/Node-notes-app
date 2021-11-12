import {readFileSync} from 'fs';
import {join} from 'path';

function getPackageVersion(path: string) {
  return JSON.parse(readFileSync(path, {encoding: 'utf-8'}))['version'];
}

export const NOTES_APP_VERSION = getPackageVersion(join(__dirname, '..', '..', 'package.json'));
