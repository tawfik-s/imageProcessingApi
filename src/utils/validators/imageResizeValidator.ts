import Joi from 'joi';

export const imageResizeSchema = Joi.object({
  height: Joi.number().required(),
  width: Joi.number().required(),
  name: Joi.string().min(1).max(200).required(),
});
