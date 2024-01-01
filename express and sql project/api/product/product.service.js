const pool = require('../../config/database');

class productService {
  async createProduct(data) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO products (product_name,description,price,stock_quantity,category,brand,image_url,admin_id)
                 VALUES(?,?,?,?,?,?,?,?)`,
        [
          data.product_name,
          data.product_description,
          data.product_price,
          data.product_stock_quantity,
          data.product_category,
          data.product_brand,
          data.product_image_url,
          data.admin_id,
        ],
        (err, result, fields) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  //get product using pagination
  async getProduct(page, limit) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM products LIMIT ? OFFSET ?`,
        [parseInt(limit), parseInt(page)],
        (err, result, fields) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  //counts all product
  productCount() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT COUNT(id) AS productCount FROM products`,
        [],
        (err, result, fields) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  //for updating product
  updateProduct({
    product_name,
    product_description,
    product_price,
    product_stock_quantity,
    product_category,
    product_brand,
    product_image_url,
  }) {
    // const { product_name, product_description, product_price, product_stock_quantity, product_category, product_brand, product_image_url } = data

    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE products
                 SET 
                 product_name = ?,
                 description = ?,
                 price = ?,
                 stock_quantity = ?,
                 category = ?,
                 brand = ?,
                 image_url = ?
                 WHERE id = ?`,
        [
          product_name,
          product_description,
          product_price,
          product_stock_quantity,
          product_category,
          product_brand,
          product_image_url,
          product_id,
        ],
        (err, result, fields) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  deleteProduct({ id }) {
    return new Promise((resolve, reject) => {
      console.log('id', id);
      pool.query(
        `DELETE FROM products WHERE id = ?`,
        [id],
        (err, result, fields) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }
}

module.exports = productService;
