import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chordgo.auth@gmail.com",
    pass: "mqwbrtzghlaxzxxk",
  },
});

const sendOtpEmail = async (to: string, otp: string) => {
  const mailOptions = {
    from: "chordgo.auth@gmail.com",
    to,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${to}: ${otp}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();
    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }
    await sendOtpEmail(email, otp);
    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: error.message || "Error sending OTP" },
      { status: 500 }
    );
  }
}
