import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Config transporter Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Prevent TLS issues
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 2. Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "franco.paganoni1@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h3>Información de contacto:</h3>
        <ul>
          <li>Nombre: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Mensaje:</h3>
        <p>${message}</p>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email enviado exitosamente!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return NextResponse.json(
      { message: "Error al enviar el email." },
      { status: 500 }
    );
  }
}
