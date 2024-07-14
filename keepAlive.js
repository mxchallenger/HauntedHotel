const https = require('https');

setInterval(() => {
  https.get('https://your-supabase-url.supabase.co');
}, 21600000); // every 6 hours (21600000 ms)
