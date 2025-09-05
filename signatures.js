let signatures = []; // This is in-memory storage; Vercel serverless functions are stateless, so for real persistence use a database

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(signatures);
  } else if (req.method === "POST") {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name required" });
    signatures.push(name);
    res.status(200).json({ success: true, signatures });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
