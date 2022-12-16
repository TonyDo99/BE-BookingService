"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDatabase = void 0;
const Joi = require("joi");
exports.validateDatabase = Joi.object({
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASENAME: Joi.string().required(),
});
//# sourceMappingURL=database.joi.js.map