// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

export async function POST(req: Request) {
  const { name, email, message, company } = await req.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["hello@premiumcoat.ca"],
      subject: "Contact message - premiumcoat.ca",
      html: `
      <div>
        <p>Name: ${name}</p>
        <p>Company name: ${company}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      </div>
      `,
    });

    // Simular el retraso de 2 segundos
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulación exitosa de envío de correo
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: unknown) {
    let errorMessage = "Unknown error";

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    } else {
      errorMessage = JSON.stringify(error);
    }

    return NextResponse.json(
      {
        message: "Error sending email",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
