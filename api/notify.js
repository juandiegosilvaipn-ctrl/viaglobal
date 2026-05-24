export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { clienteNombre, visa, codigo } = req.body;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Vía Global <onboarding@resend.dev>',
        to: 'juandiegosilvaipn@gmail.com',
        subject: '✅ DS-160 completado al 100%',
        html: `
          <h2>DS-160 Completado</h2>
          <p>El cliente <strong>${clienteNombre}</strong> ha completado su DS-160 al 100%.</p>
          <p><strong>Tipo de visa:</strong> ${visa}</p>
          <p><strong>Código de cliente:</strong> ${codigo}</p>
          <p>Entra a Supabase para ver todos los datos.</p>
        `
      })
    });

    const data = await r.json();
    return res.status(200).json({ ok: true, data });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
