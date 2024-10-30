// api/deauthorize.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Deauthorize callback data:", req.body);
    res.status(200).send('Deauthorization received');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
