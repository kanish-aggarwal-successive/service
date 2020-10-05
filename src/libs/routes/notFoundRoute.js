import { NextFunction, Request, Response } from 'express';

import { SystemResponse } from '../routes/errorHandler';

export default (req=Request, res=Response, next=NextFunction) => {
  return next( SystemResponse.notFoundError('', '') );
};