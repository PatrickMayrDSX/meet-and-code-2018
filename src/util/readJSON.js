import fs from 'fs';

import readFile from './readFile';

const _readJSON = (filename) => JSON.parse(readFile(filename));

export default _readJSON;
