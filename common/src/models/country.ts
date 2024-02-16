import mongoose, { Document } from 'mongoose';

export interface ICountry extends Document {
  countryCode: string;
  name: string;
}

const simSchema = new mongoose.Schema({
  countryCode: { type: String, unique:true, required: true },
  name: { type: String, required: false },
});

export default mongoose.model<ICountry>('Country', simSchema);