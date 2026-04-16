const https = require('https');
https.get('https://moldguardkenya.co.ke/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<link[^>]+(?:icon|favicon)[^>]*>/gi);
    console.log(matches ? matches.join('\n') : 'No icons found');
  });
}).on('error', err => console.error(err));
