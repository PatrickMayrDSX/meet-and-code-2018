import { get, chunk } from 'lodash';

import readFile from '../../util/readFile';
import CustomError from '../../util/CustomError';

const _routesFN = (queryParameter) => {
  const rank = get(queryParameter, 'rank');
  if (rank == null) {
    throw new CustomError(400, 'no rank provided');
  }
  return {
    data: readFile(`${__dirname}/../../../img/number_${rank}.png`, null),
    type: 'png',
  };
}

export default _routesFN;
