import { Document } from 'mongoose';

export interface IHome  {
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  price: number;
}

export interface HomeDocument extends IHome, Document {}

