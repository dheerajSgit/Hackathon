import Product from '../models/product.model.js';


// get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get a product by id
export const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({id});
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


