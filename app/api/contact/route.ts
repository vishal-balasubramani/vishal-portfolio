import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#7c3aed,#db2777);
                     border-radius:12px 12px 0 0;padding:32px 36px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;letter-spacing:-0.5px;">
              Vishal CB
            </h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">
              Portfolio — Contact Form
            </p>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="background:#ffffff;padding:32px 36px;">

            <!-- Green alert banner -->
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;
                        padding:12px 16px;margin-bottom:24px;">
              <span style="color:#16a34a;font-size:13px;font-weight:600;">
                &#9679;&nbsp; New message received on your portfolio
              </span>
            </div>

            <!-- Sender card -->
            <table width="100%" cellpadding="0" cellspacing="0"
                   style="background:#fafafa;border:1px solid #e4e4e7;
                          border-radius:10px;margin-bottom:24px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 14px;font-size:11px;font-weight:600;color:#71717a;
                            text-transform:uppercase;letter-spacing:0.8px;">
                    Sender Details
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="80" style="font-size:13px;color:#71717a;
                                           padding-bottom:10px;vertical-align:top;">Name</td>
                      <td style="font-size:14px;font-weight:600;color:#18181b;padding-bottom:10px;">
                        ${name}
                      </td>
                    </tr>
                    <tr>
                      <td width="80" style="font-size:13px;color:#71717a;
                                           padding-bottom:10px;vertical-align:top;">Email</td>
                      <td style="font-size:14px;font-weight:600;padding-bottom:10px;">
                        <a href="mailto:${email}"
                           style="color:#7c3aed;text-decoration:none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td width="80" style="font-size:13px;color:#71717a;vertical-align:top;">
                        Subject
                      </td>
                      <td style="font-size:14px;font-weight:600;color:#18181b;">${subject}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <p style="margin:0 0 8px;font-size:11px;font-weight:600;color:#71717a;
                      text-transform:uppercase;letter-spacing:0.8px;">Message</p>
            <div style="background:#fafafa;border-left:3px solid #7c3aed;
                        border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#3f3f46;
                        white-space:pre-wrap;">${message}</p>
            </div>

            <!-- Reply button -->
            <div style="text-align:center;">
              <a href="mailto:${email}?subject=Re: ${subject}"
                 style="display:inline-block;
                        background:linear-gradient(135deg,#7c3aed,#db2777);
                        color:#fff;text-decoration:none;font-size:15px;font-weight:600;
                        padding:14px 40px;border-radius:8px;letter-spacing:0.2px;">
                &#8594;&nbsp; Reply to ${name}
              </a>
            </div>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f4f4f5;border-radius:0 0 12px 12px;
                     padding:20px 36px;text-align:center;border-top:1px solid #e4e4e7;">
            <p style="margin:0 0 4px;font-size:12px;color:#a1a1aa;">
              Received on&nbsp;<strong style="color:#71717a;">${timestamp}</strong>
            </p>
            <p style="margin:0;font-size:11px;color:#a1a1aa;">
              Sent via vishal-portfolio-98dr.vercel.app
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}