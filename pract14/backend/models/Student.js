import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    course: { type: String, required: true, trim: true },
    semester: { type: Number, required: true, min: 1, max: 12 }
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
