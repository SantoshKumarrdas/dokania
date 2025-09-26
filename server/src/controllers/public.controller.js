import Client from '../models/Client.model.js';
import Testimonial from '../models/Testimonial.model.js';
import { asyncHandler } from '../utils/index.js';

export const listClients = asyncHandler(async (req, res) => {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json({ success: true, count: clients.length, clients });
});

export const listTestimonials = asyncHandler(async (req, res) => {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json({ success: true, count: testimonials.length, testimonials });
});


