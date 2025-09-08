// Frontend (por ejemplo, un componente o archivo donde desees llamar a la API)
export async function sendEmail({
  name,
  email,
  message,
  company,
}: {
  name: string;
  email: string;
  message: string;
  company: string;
}) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Aquí puedes incluir datos adicionales si lo necesitas
        name,
        email,
        message,
        company,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      return result;
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
}
