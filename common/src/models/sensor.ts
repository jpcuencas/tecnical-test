import mongoose, { Document } from 'mongoose';

export interface ISensor extends Document {
  sensorId: string;
  carId: string;
  simId: string;
  state: 'enabled' | 'disabled';
}

const sensorSchema = new mongoose.Schema({
  sensorId: { type: String, unique:true, required: true },
  carId: { type: String },
  simId: { type: String, required: false },
  state: { type: String, enum: ['enabled', 'disabled'], default: 'enabled' },
});

export default mongoose.model<ISensor>('Sensor', sensorSchema);