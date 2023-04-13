import mongoose, { Schema } from 'mongoose'; 
import { HomeDocument, HousingModel } from '../types/interfaces';

let homeSchema: Schema<HomeDocument> = new mongoose.Schema({
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  squareFeet: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Home = mongoose.model<HomeDocument, HousingModel>('home', homeSchema);

export default Home;