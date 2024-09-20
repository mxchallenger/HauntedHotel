const { get } = require('https');
require('dotenv').config();

setInterval(() => {
  get(process.env.SUPABASE_URL);
}, 21600000); // every 6 hours
