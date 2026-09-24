import { connectDb, Student } from "./_db.js";

export default async function handler(req, res) {
  try {
    await connectDb();

    if (req.method === "GET") {
      const students = await Student.find().sort({ createdAt: -1 });
      return res.status(200).json(students);
    }

    if (req.method === "POST") {
      const student = await Student.create(req.body);
      return res.status(201).json(student);
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    return res.status(error.code === 11000 ? 409 : 500).json({
      message: error.code === 11000
        ? "A student with this email already exists."
        : error.message
    });
  }
}
