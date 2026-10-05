import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── POST /api/booking ────────────────────────────────────────────────────────
// Receives the booking form data and sends a formatted email to MoldGuard Kenya.
// Credentials are read from environment variables — never exposed to the browser.

export async function POST(req: NextRequest) {
  try {
    // ── Guard: catch missing env vars before nodemailer tries to resolve them ─
    const smtpHost = process.env.SMTP_HOST;
    const smtpPass = process.env.SMTP_PASS;
    const smtpUser = process.env.SMTP_USER;
    const toEmail  = process.env.BOOKING_TO_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      console.error("Missing SMTP env vars:", { smtpHost, smtpUser, toEmail });
      return NextResponse.json(
        { error: "Email service not configured. Please call us on 0710907628." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, phone, email, location, service, urgency, preferredDate, message } = body;

    // Basic validation
    if (!name || !phone || !location || !service || !urgency) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── SMTP transporter using the pestraid mail server ─────────────────────
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { rejectUnauthorized: false },
    });

    // ── Urgency label map ────────────────────────────────────────────────────
    const urgencyLabels: Record<string, string> = {
      "emergency": "🚨 Emergency (Same Day)",
      "urgent":    "⚡ Urgent (1–2 Days)",
      "standard":  "📅 Standard (This Week)",
      "planned":   "🗓️ Planned (Flexible)",
    };

    // ── Email body — clean HTML table layout ─────────────────────────────────
    const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><style>
  body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
  .card { background: white; border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.10); }
  .header { background: #1e3a0f; padding: 28px 32px; }
  .header h1 { color: white; margin: 0; font-size: 22px; }
  .header p { color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px; }
  .body { padding: 28px 32px; }
  .badge { display: inline-block; background: #8bc34a; color: #1e3a0f; font-weight: 700; font-size: 13px; padding: 4px 12px; border-radius: 999px; margin-bottom: 20px; }
  table { width: 100%; border-collapse: collapse; }
  tr { border-bottom: 1px solid #e2e8f0; }
  tr:last-child { border-bottom: none; }
  td { padding: 11px 0; font-size: 14px; vertical-align: top; }
  td:first-child { color: #718096; width: 160px; font-weight: 600; }
  td:last-child { color: #1a2e0d; font-weight: 500; }
  .message-box { background: #faf8f0; border-left: 4px solid #2d5016; border-radius: 0 8px 8px 0; padding: 14px 16px; margin-top: 20px; font-size: 14px; color: #4a5568; line-height: 1.6; }
  .footer { background: #f0f7e8; padding: 18px 32px; font-size: 12px; color: #718096; text-align: center; }
  .cta { margin-top: 20px; }
  .cta a { display: inline-block; background: #2d5016; color: white; padding: 12px 28px; border-radius: 999px; text-decoration: none; font-weight: 700; font-size: 14px; margin-right: 8px; margin-bottom: 8px; }
  .cta a.wa { background: #25D366; }
</style></head>
<body>
<div class="card">
  <div class="header">
    <h1>🛡️ New Booking Request — MoldGuard Kenya</h1>
    <p>Submitted on ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })}</p>
  </div>
  <div class="body">
    <div class="badge">${urgencyLabels[urgency] ?? urgency}</div>
    <table>
      <tr><td>👤 Name</td><td>${name}</td></tr>
      <tr><td>📞 Phone / WhatsApp</td><td><a href="tel:${phone}" style="color:#2d5016">${phone}</a></td></tr>
      ${email ? `<tr><td>📧 Email</td><td><a href="mailto:${email}" style="color:#2d5016">${email}</a></td></tr>` : ""}
      <tr><td>📍 Location</td><td>${location}</td></tr>
      <tr><td>🛡️ Service</td><td>${service}</td></tr>
      <tr><td>⏱️ Urgency</td><td>${urgencyLabels[urgency] ?? urgency}</td></tr>
      ${preferredDate ? `<tr><td>📅 Preferred Date</td><td>${preferredDate}</td></tr>` : ""}
    </table>
    ${message ? `<div class="message-box"><strong>Problem Description:</strong><br>${message}</div>` : ""}
    <div class="cta">
      <a href="tel:${phone}">📞 Call ${phone}</a>
      <a href="https://wa.me/${phone.replace(/\D/g, "").replace(/^0/, "254")}" class="wa">💬 WhatsApp</a>
    </div>
  </div>
  <div class="footer">MoldGuard Kenya · moldguardkenya.co.ke · 0710 907 628</div>
</div>
</body>
</html>
    `.trim();

    // ── Send the email ────────────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"MoldGuard Kenya Bookings" <${smtpUser}>`,
      to: toEmail,
      replyTo: email || undefined,
      subject: `🛡️ New Booking — ${urgencyLabels[urgency] ?? urgency} | ${name} | ${location}`,
      html,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Booking email error:", err);
    return NextResponse.json({ error: "Failed to send booking. Please call us directly." }, { status: 500 });
  }
}
