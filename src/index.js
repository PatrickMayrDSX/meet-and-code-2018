import 'babel-polyfill';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import coordinatesFn from './coordinates/';
import { logWarning } from './util/LoggingHelper';

const app = express();
app.use(cors());
app.use(helmet());

const _addEndpoint = (route, returnDataFn) => {
  console.log(`(ℹ️ ) adding route for "${route}"`);
  app.get(`/${route}/`, (req, res) => {
    res.send(returnDataFn(req.query));
  });
};

_addEndpoint('coordinates', coordinatesFn);

// -- error handler!
app.use(function(error, req, res, next) {
  logWarning(`${error.statusCode || 500} - ${error.message}`);
  res
    .status(error.statusCode || 500)
    .json({
      errorMessage: error.message,
    });
});

app.listen(3001, () => {
  console.log('(✅ ) init done!');
  console.log('app listening on port 3001!');
});
