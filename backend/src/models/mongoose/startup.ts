import mongoose from "mongoose";

let startupSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    index: true
  },
  description : {
    type: String,
    required: true,
    index: true
  },
  numberOfEmployes: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
	amountToRaise: {
		type: Number,
	},
	amountRaised: {
		type: Number,
		default: 0
	},
  location: {
    name: String,
    code: String
  },
})

const Startup = mongoose.model('startup', startupSchema);

export default Startup;