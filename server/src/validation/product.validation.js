import Joi from 'joi';

export const createProductSchema = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    category: Joi.string().required(),
    priceLabel: Joi.string().optional(),
    description: Joi.string().required(),
    longDescription: Joi.string().allow(''),
    features: Joi.array().items(Joi.string()).default([]),
    specifications: Joi.object().pattern(/.*/, Joi.string()).default({}),
    images: Joi.array().items(Joi.string().uri()).default([]),
    applications: Joi.array().items(Joi.string()).default([]),
    inStock: Joi.boolean().default(true)
});

export const updateProductSchema = createProductSchema.fork(
    ['name', 'slug', 'category', 'description'],
    (schema) => schema.optional()
);


