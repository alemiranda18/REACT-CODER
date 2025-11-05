import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    stock: Number
});

export const ProductModel = mongoose.model('Product', productSchema);