import { Document, Model } from 'mongoose';

export interface IHome  {
  name: string;
  address?: string;
  description?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  price: number;
}

export interface HomeDocument extends IHome, Document {}
export interface HousingModel extends Model<HomeDocument> {}

