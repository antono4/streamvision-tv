# 🚀 Deploy StreamVision TV API

## Pilihan 1: Render (Recommended - Gratis & Mudah)

### Langkah:
1. Buka https://render.com
2. Klik "Sign Up" → Login dengan GitHub
3. Klik "New +" → "Web Service"
4. Connect repository: `antono4/streamvision-tv`
5. Configure:
   - **Name:** `streamvision-api`
   - **Root Directory:** `api`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Klik "Create Web Service"
7. Tunggu ~1-2 menit, selesai!

### Setelah Deploy:
- API akan tersedia di: `https://streamvision-api.onrender.com`
- Test: `https://streamvision-api.onrender.com/api/health`

---

## Pilihan 2: Railway (Gratis)

### Langkah:
1. Buka https://railway.app
2. Login dengan GitHub
3. Klik "New Project" → "Deploy from GitHub"
4. Pilih repo `antono4/streamvision-tv`
5. Railway auto-detect Node.js
6. Tunggu deploy selesai

### Setelah Deploy:
- API akan tersedia di URL yang diberikan Railway

---

## Pilihan 3: Vercel (Gratis)

### Langkah:
1. Buka https://vercel.com
2. Login dengan GitHub
3. Klik "Add New" → "Project"
4. Import repo `antono4/streamvision-tv`
5. Set Root Directory: `api`
6. Klik "Deploy"

---

## Pilihan 4: Fly.io (Gratis)

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login
fly auth login

# Deploy
cd api
fly launch
fly deploy
```

---

## Pilihan 5: Self-Host (VPS/Linux)

```bash
# Clone repo
git clone https://github.com/antono4/streamvision-tv.git
cd streamvision-tv/api

# Install & Run
npm install
npm start

# atau dengan PM2 untuk production
npm install -g pm2
pm2 start server.js --name streamvision-api
pm2 save
pm2 startup
```

---

## 📡 API Endpoints

Setelah deploy, gunakan URL Anda:

```bash
# Health Check
curl https://YOUR-URL.com/api/health

# Get All Channels
curl https://YOUR-URL.com/api/channels

# Get Channel by ID
curl https://YOUR-URL.com/api/channels/1

# Get by Category
curl https://YOUR-URL.com/api/channels/category/news

# Get by Region
curl https://YOUR-URL.com/api/channels/region/asia

# Search
curl "https://YOUR-URL.com/api/search?q=BBC"
```

---

## 🔧 Update Website dengan API URL

Setelah API berhasil di-deploy, update `index.html`:

```javascript
const API_BASE = 'https://YOUR-DEPLOYED-API-URL.com';
```

---

## ❓ Troubleshooting

### Render Error: "Could not find build command"
Pastikan Root Directory adalah `api`

### CORS Error
API sudah di-configure untuk CORS. Jika masih error, cek apakah ada masalah network.

### Channel tidak tampil
- Pastikan API sudah running
- Cek apakah URL API_BASE sudah benar di `index.html`

---

## 📊 Monitoring

### Check API Status
```bash
curl https://YOUR-URL.com/api/health
```

Response:
```json
{
  "success": true,
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```