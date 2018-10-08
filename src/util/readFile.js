import fs from 'fs';

const _readFile = (filename, encoding = 'utf8') => {
  return fs.readFileSync(filename);
};

export default _readFile;
