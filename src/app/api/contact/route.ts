import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_your_api_key_here") {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: { name?: string; email?: string; company?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "NagWara Website <onboarding@resend.dev>",
      to: ["aasanchez@gmail.com"],
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
          <div style="border-bottom:2px solid #D42B2B;padding-bottom:16px;margin-bottom:24px">
            <h2 style="margin:0;font-size:18px">New contact form submission — NagWara</h2>
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
            Sent from the NagWara website. Reply to this email to respond directly to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent, id:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
