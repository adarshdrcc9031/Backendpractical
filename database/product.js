const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 10
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product