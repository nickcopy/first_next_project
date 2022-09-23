import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.json({ ok: true, msg: "GETcall" });
      break;
    case "POST":
      res.json({ ok: true, msg: "POSTcall" });
      break;
    case "DELETE":
      res.json({ ok: true, msg: "DELETEcall" });
      break;
  }
}
