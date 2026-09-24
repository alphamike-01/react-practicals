import { connectDb, Student } from "../_db.js";

export default async function handler(req, res) {
  try {
    await connectDb();
    const { id } = req.query;

    if (req.method === "GET") {
      const student = await Student.findById(id);
      if (!student) return res.status(404).json({ message: "Student not found." });
      return res.status(200).json(student);
    }

    if (req.method === "PUT") {
      const student = await Student.findByIdAndUpdate(
        id, req.body, { new: true, runValidators: true }
      );
      if (!student) return res.status(404).json({ message: "Student not found." });
      return res.status(200).json(student);
    }

    if (req.method === "DELETE") {
      const student = await Student.findByIdAndDelete(id);
      if (!student) return res.status(404).json({ message: "Student not found." });
      return res.status(200).json({ message: "Student deleted successfully.", student });
    }

    res.setHeader("Allow", "GET, PUT, DELETE");
    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    return res.status(error.code === 11000 ? 409 : 400).json({
      message: error.code === 11000
        ? "A student with this email already exists."
        : error.message
    });
  }
}
