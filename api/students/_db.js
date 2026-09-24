import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI environment variable is not configured.");

let cached = globalThis.__mongooseCache;
if (!cached) {
  cached = globalThis.__mongooseCache = { conn: null, promise: null };
}

export async function connectDb() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    course: { type: String, required: true, trim: true },
    semester: { type: Number, required: true, min: 1, max: 12 }
  },
  { timestamps: true }
);

export const Student =
  mongoose.models.Student || mongoose.model("Student", schema);
