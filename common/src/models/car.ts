import mongoose, { Document } from 'mongoose';

export interface ICar extends Document {
  carId: string;
  name: string;
}

const simSchema = new mongoose.Schema({
  simId: { type: String, unique:true, required: true },
  name: { type: String, required: false },
});

export default mongoose.model<ICar>('Car', simSchema);