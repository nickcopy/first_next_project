export default function handler(req, res) {
  const {
    query: { api_key, lang, region, id },
  } = req;
  console.log(req.query, api_key);

  res.json({ ok: true, msg: "GETcall" });
}
