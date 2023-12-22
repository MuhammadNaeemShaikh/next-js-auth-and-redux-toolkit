const order = require('./order.service')
const orderObj = new order();

module.exports = {
    createOrder: (req, res) => {
        try {
            const
                {   billing_street_address, billing_city, billing_state, billing_postal_code,
                    billing_country, shipping_street_add, shipping_city, shipping_state, shipping_postal_code, shipping_country,
                    user_id, product_id, total_price, order_status,
                    payment_status, contact_email, contact_phone, notes, tracking_info } = req.body

        } catch (error) {

        }
    }
}