import mongoose from "mongoose";

let Planet = new mongoose.Schema({
  "position": { type: Number },
  "name": { type: String, required: true },
  "image": { type: String },
  "velocity": { type: String },
  "distance": { type: Number },
  "description": { type: String }
})

export default mongoose.model('planets', Planet);