import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'POST') {
    res.status(405).send({
      error: `Method ${req.method} is not allowed.`
    });
  }

  const { username, password } = req.body;

  if (username === process.env.ADMIN_ID &&
      password === process.env.ADMIN_PW) {
    res.status(200).send({
      message: "Login success."
    });
  } else {
    res.status(401).send({
      error: "Username/Password Invalid."
    })
  }
}