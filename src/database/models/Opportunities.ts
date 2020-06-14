/* eslint-disable camelcase */
import mongoose, { Schema, Document } from 'mongoose';

// Estrutura da tabela no banco
const OpportunitiesSchema: Schema = new Schema(
  {
    org_name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    update_time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface SavedOpportunitiesDocument extends Document {
  org_name: string;
  title: string;
  value: string;
  update_time: string;
}

// exportando model
export default mongoose.model<SavedOpportunitiesDocument>(
  'opportunities',
  OpportunitiesSchema,
);
