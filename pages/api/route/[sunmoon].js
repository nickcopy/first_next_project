export default function handler(req, res) {
  console.log(req.query.id[0]);
  console.log(req.query.id[1]);
  res.json({ ok: true, msg: "GETcall" });
}
