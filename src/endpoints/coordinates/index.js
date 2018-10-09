import { get, isFinite, toNumber, chunk } from 'lodash';

import readJSON from '../../util/readJSON';
import CustomError from '../../util/CustomError';

const PAGE_SIZE = 14;

const _coordinatesFn = (queryParameter) => {
  const coordinatesJSON = readJSON(`${__dirname}/../../../fixtures/coordinates.json`);

  const allCoordinates = coordinatesJSON.coordinates;
  const pageNumber = toNumber(get(queryParameter, 'page', 1)); // page-numbers start at 1!
  const pages = chunk(allCoordinates, PAGE_SIZE);

  if (!isFinite(pageNumber) || pageNumber < 1 || pageNumber > pages.length) {
    throw new CustomError(400, 'invalid page number');
  }

  const links = {};
  if (pageNumber < pages.length) {
    links.next = `http://10.1.9.70:3001/coordinates?page=${pageNumber + 1}`;
  }

  return {
    type: 'json',
    data: {
      coordinates: pages[pageNumber - 1],
      links,
    },
  };
}

export default _coordinatesFn;
