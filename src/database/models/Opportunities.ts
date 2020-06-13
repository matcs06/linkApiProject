import mongoose, { Schema, Document } from 'mongoose';

// Estrutura da tabela no banco
const OpportunitiesSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface SavedOpportunitiesDocument extends Document {
  name: string;
  value: number;
}

// exportando model
export default mongoose.model<SavedOpportunitiesDocument>(
  'opportunities',
  OpportunitiesSchema,
);
