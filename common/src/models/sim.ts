import mongoose, { Document } from 'mongoose';

export interface ISim extends Document {
  simId: string;
  countryCode: string;
  phone: string;
}

const simSchema = new mongoose.Schema({
  simId: { type: String, unique:true, required: true },
  countryCode: { type: String, required: false, default: 'ES' },
  phone: { type: String, required: false },
});

export default mongoose.model<ISim>('Sim', simSchema);