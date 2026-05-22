# Vía Global — Guía de instalación en Vercel

## Estructura del proyecto
```
viaglobal/
├── api/
│   └── chat.js        ← Backend seguro (llama a Claude)
├── public/
│   ├── index.html     ← App completa
│   └── logo.png       ← Tu logo
├── vercel.json        ← Configuración de Vercel
└── README.md
```

---

## Paso 1 — Crear cuenta en Vercel
1. Ve a https://vercel.com
2. Clic en "Sign Up"
3. Regístrate con tu cuenta de GitHub (si no tienes GitHub, créala gratis en github.com)

---

## Paso 2 — Instalar Vercel CLI
Abre la terminal de tu computadora y ejecuta:
```bash
npm install -g vercel
```
Si no tienes Node.js instalado, descárgalo en: https://nodejs.org

---

## Paso 3 — Subir el proyecto
1. Abre la terminal en la carpeta `viaglobal`
2. Ejecuta:
```bash
vercel login
```
3. Sigue las instrucciones (te manda un correo de confirmación)
4. Luego ejecuta:
```bash
vercel --prod
```
5. Cuando pregunte "In which directory is your code located?" presiona Enter
6. Cuando pregunte por el nombre del proyecto escribe: `viaglobal`
7. Espera a que termine — te dará una URL como: `https://viaglobal.vercel.app`

---

## Paso 4 — Agregar tu API Key de Anthropic (IMPORTANTE)
Sin este paso la IA no funciona.

1. Ve a https://console.anthropic.com
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" y crea una nueva key
4. Cópiala

Luego en Vercel:
1. Ve a https://vercel.com/dashboard
2. Clic en tu proyecto `viaglobal`
3. Ve a "Settings" → "Environment Variables"
4. Agrega:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (pega tu API key)
5. Clic en "Save"
6. Ve a "Deployments" y haz clic en "Redeploy"

---

## Paso 5 — Dominio personalizado (opcional)
Si quieres `app.viaglobal.mx` en lugar de `viaglobal.vercel.app`:
1. En tu proyecto Vercel ve a "Settings" → "Domains"
2. Agrega tu dominio
3. Vercel te dará instrucciones para apuntarlo desde tu registrador de dominio

---

## Costo estimado
- Vercel: **Gratis** para empezar (hasta 100GB de transferencia/mes)
- Anthropic API: ~$0.003 por mensaje (~$3 por cada 1,000 mensajes)
- Con 10 casos al mes: menos de $1 USD en API

---

## Soporte
Si tienes dudas en algún paso, guarda este archivo y consúltalo con Claude.
