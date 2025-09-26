import Product from '../models/Product.model.js';
import { asyncHandler } from '../utils/index.js';

export const listProducts = asyncHandler(async (req, res) => {
    const { q, category, sortBy } = req.query;
    const filter = {};
    if (q) {
        filter.$or = [
            { name: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } }
        ];
    }
    if (category && category !== 'all') filter.category = category;
    const sort = {};
    if (sortBy === 'name') sort.name = 1;
    if (sortBy === 'category') sort.category = 1;
    const products = await Product.find(filter).sort(sort);
    res.json({ success: true, count: products.length, products });
});

export const getProduct = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
});

export const createProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
});

export const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
});

export const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true });
});


