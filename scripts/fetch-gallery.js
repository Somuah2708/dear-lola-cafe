const https = require('https');
const fs = require('fs');
const path = require('path');

const query = encodeURIComponent('Theia coffee house accra');
const options = {
  hostname: 'duckduckgo.com',
  path: '/?q=' + query,
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const vqdMatch = data.match(/vqd=([\d-]+)/);
    if (!vqdMatch) return console.log('no vqd token');
    const vqd = vqdMatch[1];
    
    const imgOpts = {
      hostname: 'duckduckgo.com',
      path: '/i.js?q=' + query + '&o=json&vqd=' + vqd,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    };
    https.get(imgOpts, (res2) => {
      let data2 = '';
      res2.on('data', chunk => data2 += chunk);
      res2.on('end', () => {
        try {
            const results = JSON.parse(data2).results;
            const targetsconst https = require('https');
const fs =rior-1.jpg", "pastry-1.jpg", "brunch-1const fs = require('fs');
cons-2const path = require('pa "
cotry-2.jpg", "brunch-2.jpg"
            ];
            let count = 0;
            const out  hostname: 'ducer  path: '/?q=A/theia-coffee/pu  headers: { 'User-Age  };

https.get(options, (res) => {
  let data = '';
  res.on('data', chuou
t >  let data = '';
  res.on('dif  res.on('data'ud  res.on('end', () => {
    const vqdMaton    const vqdMatch = d      if (!vqdMatch) return console.log('no vqd tmg    const vqd = vqdMatch[1];
    
    const imgOpts ==>    
    con               if (img      hostname: 'duc00      path: '/i.js?q=' + query +co      headers: { 'User-Agent': 'Mozilla/5.0' , targets[count]));
                            imgRes.pipe(f);
      let data2 = '';
      res2.++      res2.on('data'        res2.on('end', () => {
        try {
    {        try {
            c       }
        } catch(e) { console.error('Parse error', e) }
      });
    });
  });
});
