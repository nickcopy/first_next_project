const 원본id = "ksw";
const 원본pw = "123";
export default function handler(req, res) {
  console.log("나는 문어당 ㅎㅎㅎㅎㅎㅎㅎ");
  console.log(req.body);
  if ("POST" !== req.method) {
    return res.status(405).json({ ok: false, message: "g1 안합니다" });
  }
  const { id, pw } = req.body;
  if (!id) return res.json({ ok: false, mes: "아이디를 입력해주세여" });
  if (!pw) return res.json({ ok: false, mes: "비밀번호를 입력해주세여" });
  console.log(id, pw);
  if (id === 원본id && pw === 원본pw) {
    res.json({ ok: true, mes: "로그인 완료" });
  } else {
    res.json({ ok: false, mes: "아이디 또는 비밀번호가 틀립니다" });
  }
}
