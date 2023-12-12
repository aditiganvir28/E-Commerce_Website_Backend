const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    items: {
        item: {
            type: mongoose.Schema,
            ref: 'Item',
            required: true
        },
        buyer: {
            type: mongoose.Schema,
            ref: 'User',
            required: true
        },
        seller: {
            type: mongoose.Schema,
            ref: 'User',
            required: true
        }
    },
    totalPrice: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
