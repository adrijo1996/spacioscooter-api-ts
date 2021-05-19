import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  {
    timestamps: true,
  },
);

const Faq = mongoose.model("Faq", schema);

export default Faq;