const productService = require('./product.service');
const product = new productService();

module.exports = {
  createProduct: async (req, res) => {
    try {
      const { _id } = req.user;
      const body = req.body;
      body.admin_id = _id;

      //creating object of product
      const result = await product.createProduct(body);

      if (result.affectedRows > 0) {
        // Product creation successful
        return res.status(201).json({
          success: 1,
          message: 'Product created successfully',
          product_id: result.insertId,
        });
      } else {
        return res.status(500).json({
          success: 0,
          message: 'Error in creating product',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: 'Error in Creating Product',
      });
    }
  },
  getProduct: async (req, res) => {
    try {
      const { page, limit } = req.params;

      console.log(page, limit);

      //getting products
      const products = await product.getProduct(page, limit);

      //products count

      const totalProductsCount = await product.productCount();

      res.status(200).json({
        success: 1,
        message: 'Products retrieved successfully',
        data: products,
        page: parseInt(page),
        limit: parseInt(limit),
        total_pages: Math.ceil(totalProductsCount[0].productCount / limit),
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: 'Error In Getting Product',
      });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const {
        product_id,
        product_name,
        description,
        price,
        stock_quantity,
        category,
        brand,
        image_url,
        admin_id,
      } = req.body;

      if (!product_id) {
        return res.status(400).json({
          success: 0,
          message: 'Product ID is required for updating a product.',
        });
      }

      const updatedProduct = await product.updateProduct({
        product_id,
        product_name,
        description,
        price,
        stock_quantity,
        category,
        brand,
        image_url,
        admin_id,
      });

      if (updatedProduct.affectedRows > 0) {
        res.status(200).json({
          success: 1,
          message: 'Product updated successfully',
          updatedProduct: req.body,
        });
      } else {
        res.status(404).json({
          success: 0,
          message: 'Product not found or no changes made.',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: 'Error In Updating Product',
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          success: 0,
          message: 'Product id required for deleting the products',
        });
      }

      const isProductDlt = await product.deleteProduct({id});

      if (isProductDlt) {
        return res.status(200).json({
          success: 1,
          message: 'Product Successfully Deleted',
        });
      } else {
        return res.status(400).json({
          success: 1,
          message: 'Error While Deleting Products',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: 0,
        message: 'Error In Deleting Products',
      });
    }
  },
};
