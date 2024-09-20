import { createClient } from '@supabase/supabase-js';
// import dotenv from 'dotenv';

// if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
//   dotenv.config();
// }

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
console.log('supabaseUrl', supabaseUrl);
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
console.log('supabaseAnonKey', supabaseAnonKey);
const schema = 'hotels';

const supabase = createClient(supabaseUrl, supabaseAnonKey, { db: { schema } });
console.log('supabase', supabase);

export default supabase;
