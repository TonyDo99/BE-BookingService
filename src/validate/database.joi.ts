import * as Joi from 'joi';

export const validateDevDB = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASENAME: Joi.string().required(),
});

export const validateProdDB = Joi.object({
  DB_URL: Joi.string().required(),
});
