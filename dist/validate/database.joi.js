"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProdDB = exports.validateDevDB = void 0;
const Joi = require("joi");
exports.validateDevDB = Joi.object({
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASENAME: Joi.string().required(),
});
exports.validateProdDB = Joi.object({
    DB_URL: Joi.string().required(),
});
//# sourceMappingURL=database.joi.js.map