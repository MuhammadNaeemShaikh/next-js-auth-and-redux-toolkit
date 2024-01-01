const express = require('express');
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('./product.Controller');
const { adminAuth } = require('../../config/middleware/verifyToken');
const router = express.Router();

router.post('/', adminAuth, createProduct);
router.get('/:page/:limit', getProduct);
router.patch('/', adminAuth, updateProduct);
router.delete('/:id', adminAuth, deleteProduct);

module.exports = router;
