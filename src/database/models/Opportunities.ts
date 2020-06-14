import mongoose, { Schema, Document } from 'mongoose';

// Estrutura da tabela no banco
const OpportunitiesSchema: Schema = new Schema(
  {
    order: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface SavedOpportunitiesDocument extends Document {
  order: string;
}

// exportando model
export default mongoose.model<SavedOpportunitiesDocument>(
  'opportunities',
  OpportunitiesSchema,
);
