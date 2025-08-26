export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // basic validation
    if (!email || !subject || !message) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Call Brevo REST API
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY, // server-side only
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio Website', email: process.env.FROM_EMAIL },
        to: [{ email: process.env.TO_EMAIL, name: 'Site Owner' }],
        replyTo: { email }, // so you can reply directly to the visitor
        subject: `[Portfolio] ${subject}`,
        textContent: `From: ${email}\n\n${message}`,
        htmlContent: `
          <p><strong>From:</strong> ${email}</p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
        tags: ['portfolio-contact'],
      }),
    });

    if (!brevoRes.ok) {
      const details = await brevoRes.json().catch(() => ({}));
      return Response.json(
        { error: 'Failed to send email via Brevo.', details },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Server error.' }, { status: 500 });
  }
}
