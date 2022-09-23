export default function handler(req, res) {
  console.log(req.query);
  console.log(req.query);
  res.json({ ok: true, msg: "GETcall" });
}
