import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "NagWara Website <onboarding@resend.dev>",
    to: "alexis@qtechgames.com",
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
        <div style="border-bottom:2px solid #D42B2B;padding-bottom:16px;margin-bottom:24px">
          <img src="https://nagwara.com/logo.svg" alt="NagWara" height="24" style="display:block;margin-bottom:8px" />
          <h2 style="margin:0;font-size:18px">New contact form submission</h2>
        </div>

        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:8px 0;color:#666;width:100px">Name</td>
            <td style="padding:8px 0;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#666">Email</td>
            <td style="padding:8px 0"><a href="mailto:${email}" style="color:#D42B2B">${email}</a></td>
          </tr>
          ${company ? `<tr>
            <td style="padding:8px 0;color:#666">Company</td>
            <td style="padding:8px 0">${company}</td>
          </tr>` : ""}
        </table>

        <div style="margin-top:24px;padding:16px;background:#f7f7f7;border-radius:8px;font-size:14px;line-height:1.6">
          <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Message</p>
          <p style="margin:0;white-space:pre-wrap">${message}</p>
        </div>

        <p style="margin-top:24px;font-size:12px;color:#999">
          Sent from the NagWara website contact form. Reply to this email to respond directly to ${name}.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
