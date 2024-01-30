import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum:['fashion','grocery','electronics'], required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
});

const Product = mongoose.model('Product', productSchema);

export default Product;