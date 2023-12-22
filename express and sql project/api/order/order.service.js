const pool = require('../../config/database')

class orders {

    createOrder({
        billing_street_address, billing_city, billing_state, billing_postal_code, billing_country,
        shipping_street_add, shipping_city, shipping_state, shipping_postal_code, shipping_country,
        shipping_carrier, shipping_service_level, shipping_cost,
        user_id, product_id, total_price, order_status,
        payment_status, contact_email, contact_phone, notes, tracking_info
    }) {
        return new Promise((resolve, reject) => {

            //INSERT THE BILLING ADDRESS
            pool.query(
                `INSERT INTO billing_add (billing_street_address,billing_city,billing_state,billing_postal_code,billing_country) VALUES (?,?,?,?,?)`,
                [billing_street_address, billing_city, billing_state, billing_postal_code, billing_country],
                (err, billingResult, fields) => {
                    if (err) {
                        reject(err)
                    }

                    //INSERT THE SHIPPING ADDRESS

                    pool.query(
                        `INSERT INTO shipping_add (shipping_street_add,shipping_city,shipping_state,shipping_postal_code,shipping_country) VALUES (?,?,?,?,?)`,
                        [shipping_street_add, shipping_city, shipping_state, shipping_postal_code, shipping_country],
                        (err, shippingResult, fields) => {
                            if (err) {
                                reject(err)
                            }



                            pool.query(
                                `INSERT INTO shippingMethod(shipping_carrier,shipping_service_level,shipping_cost) VALUES (?,?,?)`,
                                [shipping_carrier, shipping_service_level, shipping_cost],
                                (err, shippingPayResult, fields) => {
                                    if (err) {
                                        reject(err)
                                    }

                                    const shippingAddId = shippingResult.insertId;
                                    const billingAddId = billingResult.insertId;
                                    const shippingPaymentId = shippingPayResult.insertId;



                                    pool.query(
                                        `INSERT INTO orders (user_id, product_id,shipping_address,billing_address,shipping_method, total_price, order_status, payment_status, shipping_address, billing_address, contact_email, contact_phone, notes, shipping_method, tracking_info ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
                                        [
                                            user_id, product_id, total_price, order_status, payment_status, shipping_address, billing_address, contact_email, contact_phone, notes, shipping_method, tracking_info
                                        ],
                                        (err, result, fields) => {
                                            if (err) {
                                                reject(err)
                                            }
                                            resolve(result)
                                        }
                                    )

                                }
                            )
                        }

                    )


                }
            )
        })
    }

    cancelOrder({
        order_id, order_status
    }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `UPDATE orders SET order_status = ? WHERE order_id = ?`,
                [order_id, order_status],
                (err, result, field) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(result)
                }
            )

        })
    }
}

module.exports = orders;