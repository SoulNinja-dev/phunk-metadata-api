import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  tokenid: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  attributes: [
    {
      trait_type: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
  image_url: {
    type: String,
    required: true,
    unique: true,
  },
});

const TokenModel = mongoose.model("Token", TokenSchema);

export default TokenModel;
