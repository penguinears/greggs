let comments = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const { name, comment } = req.body;
    if (!name || !comment) return res.status(400).json({ error: "Name and comment required" });
    comments.push({ name, comment });
    res.status(200).json({ success: true, comments });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
