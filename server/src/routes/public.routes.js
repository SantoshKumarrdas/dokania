import { Router } from 'express';
import { listClients, listTestimonials } from '../controllers/public.controller.js';

const router = Router();

router.get('/clients', listClients);
router.get('/testimonials', listTestimonials);

export default router;


