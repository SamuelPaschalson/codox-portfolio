import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, social } = await req.json();

    // 1️⃣ Configure transporter (using your email provider)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use 'smtp-mail.outlook.com' for Outlook, etc.
      auth: {
        user: process.env.CONTACT_EMAIL_USER, // your email
        pass: process.env.CONTACT_EMAIL_PASS, // app password or SMTP password
      },
    });

    // 2️⃣ Define email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // where you want to receive messages
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Social: ${social || "N/A"}
Message: ${message}
      `,
    };

    // 3️⃣ Send the mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
