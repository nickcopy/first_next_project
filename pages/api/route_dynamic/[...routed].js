import { useState } from "react";

export default function handler(req, res) {
  const [user, setuser] = useState();

  res.json({ ok: true, msg: "GETcall" });
}
