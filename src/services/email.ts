import { EmailBody, EmailRes } from "@/utils/models";
import axios, { AxiosResponse } from "axios";

export const sendEmail = async (
  body: EmailBody
): Promise<EmailRes | undefined> => {
  try {
    const res: AxiosResponse<EmailRes, any> = await axios.post(
      "/api/email",
      body
    );
    return res.data;
  } catch (error) {
    return {
      success: false,
    };
  }
};
