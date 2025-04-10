const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
  auth: {
    user: 'aditi2914.goel@gmail.com', // Replace with your email
    pass: 'gghm nlml gktu tdcg', // Use an app-specific password if 2FA is enabled
  },
});

router.post('/send-invoice', (req, res) => {
  const { to, orderData } = req.body;

  const subtotal = orderData.cartItems.reduce((acc, item) => {
    let price = typeof item.price === 'string'
      ? parseFloat(item.price.replace('₹', '').replace(/,/g, ''))
      : (typeof item.price === 'number'
        ? item.price
        : (item.price && item.price['$numberDouble']
          ? parseFloat(item.price['$numberDouble'])
          : 0));
    return acc + (price * (item.quantity || 1));
  }, 0);

  const shippingCost = orderData.shippingMethod === 'standard' ? 100.00 : 150.00;
  const tax = subtotal * 0.09;
  const total = (subtotal + shippingCost + tax - orderData.discount).toFixed(2);

  const invoiceHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        .header { text-align: center; background-color: #3f9b92; color: white; padding: 10px; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; }
        .order-details { margin-bottom: 20px; }
        .order-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #ddd; }
        .total { font-weight: bold; padding-top: 10px; }
        .address { margin-top: 20px; }
        .footer { text-align: center; font-size: 0.9rem; color: #666; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Invoice</h2>
          <p>Order Number: ${orderData.orderNumber}</p>
        </div>
        <div class="content">
          <h3>Dear ${orderData.billingAddress.firstName} ${orderData.billingAddress.lastName},</h3>
          <p>Thank you for your purchase! Below are the details of your order.</p>

          <div class="order-details">
            <h4>Order Details</h4>
            ${orderData.cartItems.map(item => `
              <div class="order-item">
                <span>${item.name} (Qty: ${item.quantity || 1})</span>
                <span>₹${(
                  typeof item.price === 'string'
                    ? parseFloat(item.price.replace('₹', '').replace(/,/g, ''))
                    : (typeof item.price === 'number'
                      ? item.price
                      : (item.price && item.price['$numberDouble']
                        ? parseFloat(item.price['$numberDouble'])
                        : 0)
                    )
                ).toFixed(2) * (item.quantity || 1)}</span>
              </div>
            `).join('')}
            <div class="order-item total">
              <span>Subtotal</span>
              <span>₹${subtotal.toFixed(2)}</span>
            </div>
            <div class="order-item">
              <span>Shipping (${orderData.shippingMethod})</span>
              <span>₹${shippingCost.toFixed(2)}</span>
            </div>
            <div class="order-item">
              <span>Sales Tax (9%)</span>
              <span>₹${tax.toFixed(2)}</span>
            </div>
            ${orderData.discount > 0 ? `
              <div class="order-item">
                <span>Discount</span>
                <span>-₹${orderData.discount.toFixed(2)}</span>
              </div>
            ` : ''}
            <div class="order-item total">
              <span>Grand Total</span>
              <span>₹${total}</span>
            </div>
          </div>

          <div class="address">
            <h4>Billing Address</h4>
            <p>${[
              orderData.billingAddress.address,
              orderData.billingAddress.town,
              orderData.billingAddress.state,
              orderData.billingAddress.zipCode,
              orderData.billingAddress.country
            ].filter(Boolean).join(', ')}</p>
            <p>Phone: ${orderData.billingAddress.phoneNumber}</p>
            <h4>Shipping Address</h4>
            <p>${[
              orderData.shippingAddress.sameAsBilling ? orderData.billingAddress.address : orderData.shippingAddress.address,
              orderData.shippingAddress.sameAsBilling ? orderData.billingAddress.town : orderData.shippingAddress.town,
              orderData.shippingAddress.sameAsBilling ? orderData.billingAddress.state : orderData.shippingAddress.state,
              orderData.shippingAddress.sameAsBilling ? orderData.billingAddress.zipCode : orderData.shippingAddress.zipCode,
              orderData.shippingAddress.country
            ].filter(Boolean).join(', ')}</p>
            <p>Phone: ${orderData.shippingAddress.phone || orderData.billingAddress.phoneNumber}</p>
          </div>
        </div>
        <div class="footer">
          <p>Thank you for shopping with us! For any queries, contact support@yourstore.com.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: to,
    subject: `Invoice for Order #${orderData.orderNumber}`,
    html: invoiceHtml,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send invoice' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Invoice sent successfully' });
  });
});

module.exports = router;