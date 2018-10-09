import { toNumber, isFinite, get } from 'lodash';

import readFile from '../../util/readFile';
import CustomError from '../../util/CustomError';

const _routesFN = (queryParameter, redirectFn) => {
  let rank = toNumber(get(queryParameter, 'rank'));
  if (!isFinite(rank) || rank < 1) {
    throw new CustomError(400, 'Invalid rank number (or not provided)');
  }

  return {
    newUrl: `https://api.adorable.io/avatars/100/${rank}.png`,
  };
}

export default _routesFN;
