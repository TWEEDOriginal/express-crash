import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  has_a_job: {
    type: Boolean,
    default: false,
  },
  date_employed: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", user_schema);
