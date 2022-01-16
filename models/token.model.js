import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
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
        enum: ["Eyes", "Ears", "Hair", "Sex"],
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
