import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        phone: { type: String },
        subject: { type: String, required: true },
        message: { type: String, required: true },
        source: { type: String, enum: ['contact', 'quote'], default: 'contact' }
    },
    { timestamps: true }
);

export default mongoose.model('ContactMessage', contactMessageSchema);


