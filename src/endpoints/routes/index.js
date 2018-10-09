import { toNumber, isFinite, get } from 'lodash';

import readFile from '../../util/readFile';
import CustomError from '../../util/CustomError';

const _routesFN = (queryParameter) => {
  let rank = toNumber(get(queryParameter, 'rank'));
  if (!isFinite(rank) || rank < 1) {
    throw new CustomError(400, 'Invalid rank number (or not provided)');
  }

  if (rank > 5) {
    rank = 'etc';
  }

  return {
    data: readFile(`${__dirname}/../../../img/number_${rank}.png`, null),
    type: 'png',
  };
}

export default _routesFN;
