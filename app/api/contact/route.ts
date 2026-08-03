import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      company,
      email,
      phone,
      service,
      message,
    } = body;

    // ==========================================
    // EMAIL TO JBVEXA
    // ==========================================

    await resend.emails.send({
      from: "JBVEXA Website <noreply@jbvexa.com>",
      to: ["info@jbvexa.com"],
      subject: `New Business Inquiry - ${service}`,

      html: `
      <div style="font-family:Arial,sans-serif;background:#f4f7fb;padding:40px;">

      <div style="max-width:700px;margin:auto;background:white;border-radius:12px;overflow:hidden;">

      <div style="background:#0B2A6F;padding:35px;text-align:center;color:white;">

      <h1 style="margin:0;">
      JBVEXA Technologies
      </h1>

      <p style="margin-top:8px;">
      Engineering Digital Excellence
      </p>

      </div>

      <div style="padding:40px;">

      <h2 style="color:#0B2A6F;">
      New Business Inquiry
      </h2>

      <p>
      A new enquiry has been submitted through the JBVEXA Technologies website.
      </p>

      <table style="width:100%;border-collapse:collapse;margin-top:30px;">

      <tr>
      <td style="padding:12px;background:#F5F7FA;"><strong>Full Name</strong></td>
      <td style="padding:12px;">${fullName}</td>
      </tr>

      <tr>
      <td style="padding:12px;background:#F5F7FA;"><strong>Company</strong></td>
      <td style="padding:12px;">${company}</td>
      </tr>

      <tr>
      <td style="padding:12px;background:#F5F7FA;"><strong>Email</strong></td>
      <td style="padding:12px;">
      <a href="mailto:${email}">
      ${email}
      </a>
      </td>
      </tr>

      <tr>
      <td style="padding:12px;background:#F5F7FA;"><strong>Phone</strong></td>
      <td style="padding:12px;">
      <a href="tel:${phone}">
      ${phone}
      </a>
      </td>
      </tr>

      <tr>
      <td style="padding:12px;background:#F5F7FA;"><strong>Service</strong></td>
      <td style="padding:12px;">${service}</td>
      </tr>

      </table>

      <h3 style="margin-top:40px;color:#0B2A6F;">
      Project Requirement
      </h3>

      <div style="background:#F8FCFC;border-left:4px solid #19D3B4;padding:20px;border-radius:8px;">
      ${message}
      </div>

      <div style="text-align:center;margin-top:40px;">

      <a
      href="mailto:${email}"
      style="
      background:#19D3B4;
      color:white;
      padding:15px 35px;
      text-decoration:none;
      border-radius:40px;
      display:inline-block;
      font-weight:bold;
      ">
      Reply to Client
      </a>

      </div>

      </div>

      <div style="background:#F5F7FA;padding:25px;text-align:center;color:#666;font-size:14px;">

      <strong>JBVEXA Technologies Pvt. Ltd.</strong>

      <br><br>

      Engineering Digital Excellence

      <br><br>

      <a href="https://www.jbvexa.com">
      www.jbvexa.com
      </a>

      <br><br>

      Thane • Maharashtra • India

      </div>

      </div>

      </div>
      `,
    });

    // ==========================================
    // AUTO REPLY TO CUSTOMER
    // ==========================================

    await resend.emails.send({
      from: "JBVEXA Technologies <noreply@jbvexa.com>",
      to: [email],
      subject: "We've received your enquiry | JBVEXA Technologies",

      html: `
      <div style="font-family:Arial,sans-serif;background:#f5f7fb;padding:40px;">

      <div style="max-width:650px;margin:auto;background:white;border-radius:12px;overflow:hidden;">

      <div style="background:#0B2A6F;color:white;text-align:center;padding:35px;">

      <h1 style="margin:0;">
      Thank You!
      </h1>

      <p style="margin-top:10px;">
      Your enquiry has been received successfully.
      </p>

      </div>

      <div style="padding:40px;">

      <p>Dear <strong>${fullName}</strong>,</p>

      <p>
      Thank you for contacting <strong>JBVEXA Technologies</strong>.
      </p>

      <p>
      We have successfully received your enquiry regarding
      <strong>${service}</strong>.
      </p>

      <p>
      Our team is reviewing your requirement and will contact you within
      <strong>1 business day.</strong>
      </p>

      <div style="
      background:#F8FCFC;
      padding:20px;
      border-left:4px solid #19D3B4;
      margin-top:30px;
      ">

      <strong>Your Submitted Requirement</strong>

      <br><br>

      ${message}

      </div>

      <div style="text-align:center;margin-top:40px;">

      <a
      href="https://www.jbvexa.com"
      style="
      background:#19D3B4;
      color:white;
      text-decoration:none;
      padding:15px 35px;
      border-radius:40px;
      display:inline-block;
      font-weight:bold;
      ">
      Visit Our Website
      </a>

      </div>

      <p style="margin-top:40px;">
      Regards,
      <br><br>

      <strong>JBVEXA Technologies Pvt. Ltd.</strong>

      <br>

      Engineering Digital Excellence

      </p>

      </div>

      </div>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}