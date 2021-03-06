const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
