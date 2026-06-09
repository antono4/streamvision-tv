const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// TV Channels Data with working stream URLs
const tvChannels = [
    {
        id: 1,
        name: "BBC World News",
        country: "🇬🇧",
        countryName: "United Kingdom",
        region: "europe",
        category: "news",
        viewers: 2400000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1526297003938-9568d0e8f04e?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "International news channel from BBC"
    },
    {
        id: 2,
        name: "CNN International",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "news",
        viewers: 2100000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
        description: "Global news from CNN"
    },
    {
        id: 3,
        name: "ESPN Sports",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "sports",
        viewers: 1800000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
        quality: "4K",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "Sports broadcasting network"
    },
    {
        id: 4,
        name: "NHK World",
        country: "🇯🇵",
        countryName: "Japan",
        region: "asia",
        category: "news",
        viewers: 1500000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
        description: "Japanese international broadcaster"
    },
    {
        id: 5,
        name: "Al Jazeera English",
        country: "🇶🇦",
        countryName: "Qatar",
        region: "asia",
        category: "news",
        viewers: 1750000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "International news from Qatar"
    },
    {
        id: 6,
        name: "National Geographic",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "documentary",
        viewers: 1450000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        quality: "4K",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",
        description: "Documentary and science channel"
    },
    {
        id: 7,
        name: "Euronews",
        country: "🇫🇷",
        countryName: "France",
        region: "europe",
        category: "news",
        viewers: 1200000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "European news channel"
    },
    {
        id: 8,
        name: "CCTV News",
        country: "🇨🇳",
        countryName: "China",
        region: "asia",
        category: "news",
        viewers: 2200000,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
        description: "Chinese state broadcaster"
    },
    {
        id: 9,
        name: "TV5 Monde",
        country: "🇫🇷",
        countryName: "France",
        region: "europe",
        category: "entertainment",
        viewers: 980000,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "French entertainment channel"
    },
    {
        id: 10,
        name: "TVB News",
        country: "🇭🇰",
        countryName: "Hong Kong",
        region: "asia",
        category: "news",
        viewers: 1350000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
        description: "Hong Kong news channel"
    },
    {
        id: 11,
        name: "Cartoon Network",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "kids",
        viewers: 1600000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1609803384069-19f3f5d089b5?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "Children's entertainment channel"
    },
    {
        id: 12,
        name: "Nickelodeon",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "kids",
        viewers: 1400000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1560824052-87c5c6f70aac?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",
        description: "Family entertainment channel"
    },
    {
        id: 13,
        name: "MTV",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "music",
        viewers: 1100000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "Music television channel"
    },
    {
        id: 14,
        name: "Channel V",
        country: "🇸🇬",
        countryName: "Singapore",
        region: "asia",
        category: "music",
        viewers: 850000,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
        description: "Asian music channel"
    },
    {
        id: 15,
        name: "Discovery Channel",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "documentary",
        viewers: 1750000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "Documentary and science channel"
    },
    {
        id: 16,
        name: "Food Network",
        country: "🇺🇸",
        countryName: "United States",
        region: "americas",
        category: "lifestyle",
        viewers: 920000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
        description: "Cooking and food channel"
    },
    {
        id: 17,
        name: "BBC Entertainment",
        country: "🇬🇧",
        countryName: "United Kingdom",
        region: "europe",
        category: "entertainment",
        viewers: 1050000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "British entertainment channel"
    },
    {
        id: 18,
        name: "France 24",
        country: "🇫🇷",
        countryName: "France",
        region: "europe",
        category: "news",
        viewers: 880000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",
        description: "French international news"
    },
    {
        id: 19,
        name: "RT News",
        country: "🇷🇺",
        countryName: "Russia",
        region: "europe",
        category: "news",
        viewers: 1350000,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
        quality: "HD",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        description: "Russian international news"
    },
    {
        id: 20,
        name: "KBS World",
        country: "🇰🇷",
        countryName: "South Korea",
        region: "asia",
        category: "entertainment",
        viewers: 1680000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=600&q=80",
        quality: "HD",
        streamUrl: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
        description: "Korean international broadcaster"
    }
];

// Get all channels
app.get('/api/channels', (req, res) => {
    res.json({
        success: true,
        total: tvChannels.length,
        data: tvChannels
    });
});

// Get single channel by ID
app.get('/api/channels/:id', (req, res) => {
    const channel = tvChannels.find(c => c.id === parseInt(req.params.id));
    if (!channel) {
        return res.status(404).json({
            success: false,
            message: 'Channel not found'
        });
    }
    res.json({
        success: true,
        data: channel
    });
});

// Get channels by category
app.get('/api/channels/category/:category', (req, res) => {
    const filtered = tvChannels.filter(c => c.category === req.params.category);
    res.json({
        success: true,
        total: filtered.length,
        data: filtered
    });
});

// Get channels by region
app.get('/api/channels/region/:region', (req, res) => {
    const filtered = tvChannels.filter(c => c.region === req.params.region);
    res.json({
        success: true,
        total: filtered.length,
        data: filtered
    });
});

// Get all categories
app.get('/api/categories', (req, res) => {
    const categories = [...new Set(tvChannels.map(c => c.category))];
    res.json({
        success: true,
        data: categories
    });
});

// Get all regions
app.get('/api/regions', (req, res) => {
    const regions = [...new Set(tvChannels.map(c => c.region))];
    res.json({
        success: true,
        data: regions
    });
});

// Search channels
app.get('/api/search', (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    const filtered = tvChannels.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.countryName.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query)
    );
    res.json({
        success: true,
        total: filtered.length,
        query: query,
        data: filtered
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        name: 'StreamVision TV API',
        version: '1.0.0',
        endpoints: [
            '/api/channels - Get all channels',
            '/api/channels/:id - Get channel by ID',
            '/api/channels/category/:category - Get channels by category',
            '/api/channels/region/:region - Get channels by region',
            '/api/categories - Get all categories',
            '/api/regions - Get all regions',
            '/api/search?q=query - Search channels',
            '/api/health - Health check'
        ]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 StreamVision TV API running on port ${PORT}`);
    console.log(`📺 ${tvChannels.length} channels available`);
});