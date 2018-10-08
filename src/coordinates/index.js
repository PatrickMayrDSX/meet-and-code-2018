import { get, chunk } from 'lodash';

import readJSON from '../util/readJSON';
import CustomError from '../util/CustomError';

const PAGE_SIZE = 1;

const _coordinatesFn = (queryParameter) => {
  const coordinatesJSON = readJSON(`${__dirname}/../../fixtures/coordinates.json`);

  const allCoordinates = coordinatesJSON.coordinates;
  const pageNumber = get(queryParameter, 'page', 1); // page-numbers start at 1!
  const pages = chunk(allCoordinates, PAGE_SIZE);

  if (pages.length >= pageNumber) {
    return pages[pageNumber -1];
  }

  throw new CustomError(400, 'invalid page number');
}

export default _coordinatesFn;
