import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';
const ENTRY_HTML = path.join(__dirname, 'portal_pentas_pai_supabase_edition (5).html');

app.use(express.static(__dirname, { index: false }));

app.get('/', (_req, res) => {
  res.sendFile(ENTRY_HTML);
});

app.get('*', (_req, res) => {
  res.sendFile(ENTRY_HTML);
});

app.listen(PORT, HOST, () => {
  console.log(`Portal PENTAS PAI server listening on http://${HOST}:${PORT}`);
});
