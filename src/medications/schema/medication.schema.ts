import * as mongoose from 'mongoose';

export const MedicationSchema  = new mongoose.Schema({
  name: String,
  description: String,
});
