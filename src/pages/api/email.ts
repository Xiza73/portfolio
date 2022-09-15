// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SMTPClient } from "emailjs";
import { EmailBody, EmailRes } from "@/utils/models";

interface EmailRequest extends NextApiRequest {
  body: EmailBody;
}

export default async function handler(
  req: EmailRequest,
  res: NextApiResponse<EmailRes>
) {
  const { name, email, message } = req.body;
  const { EMAIL: mainEmail, PASSWORD: mainPass } = process.env;

  const client = new SMTPClient({
    user: mainEmail,
    password: mainPass,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    await client.sendAsync({
      text: message,
      from: email,
      to: mainEmail!,
      subject: `Message from ${name}<${email}>`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
}
