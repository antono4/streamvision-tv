# StreamVision TV API

REST API untuk streaming TV online dengan data channel dari seluruh dunia.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd api
npm install
```

### 2. Start Server
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/channels` | Get semua channel |
| GET | `/api/channels/:id` | Get channel berdasarkan ID |
| GET | `/api/channels/category/:category` | Get channel berdasarkan kategori |
| GET | `/api/channels/region/:region` | Get channel berdasarkan region |
| GET | `/api/categories` | Get semua kategori |
| GET | `/api/regions` | Get semua region |
| GET | `/api/search?q=query` | Search channel |
| GET | `/api/health` | Health check |

## 📺 Channel Data Structure

```json
{
  "id": 1,
  "name": "BBC World News",
  "country": "🇬🇧",
  "countryName": "United Kingdom",
  "region": "europe",
  "category": "news",
  "viewers": 2400000,
  "rating": 4.9,
  "image": "https://...",
  "quality": "HD",
  "streamUrl": "https://...",
  "description": "International news channel from BBC"
}
```

## 📋 Contoh Penggunaan

### Get Semua Channel
```bash
curl http://localhost:3000/api/channels
```

### Get Channel dengan ID
```bash
curl http://localhost:3000/api/channels/1
```

### Get Channel berdasarkan Kategori
```bash
curl http://localhost:3000/api/channels/category/news
```

### Get Channel berdasarkan Region
```bash
curl http://localhost:3000/api/channels/region/asia
```

### Search Channel
```bash
curl "http://localhost:3000/api/search?q=BBC"
```

## 🏷️ Kategori
- `news` - Berita
- `sports` - Olahraga
- `entertainment` - Hiburan
- `documentary` - Dokumenter
- `kids` - Anak-anak
- `music` - Musik
- `lifestyle` - Gaya Hidup

## 🌍 Region
- `asia` - Asia
- `europe` - Eropa
- `americas` - Amerika
- `africa` - Afrika
- `oceania` - Oseania

## 🚀 Deploy ke Production

### Menggunakan Railway
```bash
railway init
railway add
railway up
```

### Menggunakan Render
1. Buat `render.yaml`:
```yaml
services:
  - type: web
    name: streamvision-api
    env: node
    buildCommand: npm install
    startCommand: npm start
```

### Menggunakan Vercel
```bash
npm i -g vercel
vercel
```

## 📝 Catatan

- API ini menggunakan streaming URL test untuk demo
- Untuk production, ganti `streamUrl` dengan URL streaming TV yang valid
- Pertimbangkan untuk menggunakan API streaming TV berbayar seperti:
  - Vimeo OTT
  - Mux
  - Brightcove
  - Daily.co

## 📄 License

MIT License - Antono 2024