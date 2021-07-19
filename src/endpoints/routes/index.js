import { toNumber, isFinite, get } from 'lodash';

import readFile from '../../util/readFile';
import CustomError from '../../util/CustomError';

const _routesFN = (queryParameter, redirectFn) => {
  let rank = toNumber(get(queryParameter, 'rank'));
  if (!isFinite(rank) || rank < 1) {
    throw new CustomError(400, 'Invalid rank number (or not provided)');
  }

  return {
    newUrl: `https://i.pravatar.cc/100?img=${rank}`,
  };
}

export default _routesFN;
