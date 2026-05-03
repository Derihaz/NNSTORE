export default function handler(req, res) {
  res.json({ pwd: process.env.ADMIN_PWD || '' });
}
