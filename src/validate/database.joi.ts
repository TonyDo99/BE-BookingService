import * as Joi from 'joi';

export const validateDatabase = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASENAME: Joi.string().required(),
});