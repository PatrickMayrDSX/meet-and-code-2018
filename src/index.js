import 'babel-polyfill';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import coordinatesFn from './endpoints/coordinates/';
import routesFn from './endpoints/routes/';

import { logInfo, logWarning } from './util/LoggingHelper';

const app = express();
app.use(cors());
app.use(helmet());

const _addEndpoint = (route, returnDataFn) => {
  console.log(`(ℹ️ ) adding route for "${route}"`);
  app.get(`/${route}/`, (req, res) => {
    const returnData = returnDataFn(req.query, res.redirect);
    if (returnData.newUrl != null) {
      res.redirect(301, returnData.newUrl);
    } else {
      res
        .type(returnData.type || 'html')
        .send(returnData.data);
    }
  });
};

_addEndpoint('coordinates', coordinatesFn);
_addEndpoint('routes/avatars', routesFn);

// -- error handler!
app.use(function(error, req, res, next) {
  logWarning(`${error.statusCode || 500} - ${error.message}`);
  logInfo(error);
  res
    .status(error.statusCode || 500)
    .json({
      errorMessage: error.message,
    });
});

const port = process.env.PORT || 3001;
app.listen(port , () => {
  console.log('(✅ ) init done!');
  console.log(`app listening on port ${port}!`);
});
