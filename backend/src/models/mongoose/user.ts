const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  wallet: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  description: {
    type: String
  },
  numberOfSales: {
    type: Number,
    default: 0
  },
  ratesOfSales: {
    type: Number,
    default: 0
  },
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const User = mongoose.model('users', userSchema);

export default User;