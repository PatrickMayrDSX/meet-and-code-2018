import fs from 'fs';

const _readJSON = (filename) => {
  const file = fs.readFileSync(filename, 'utf8');
  return JSON.parse(file);
};

export default _readJSON;
