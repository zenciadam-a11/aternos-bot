const mineflayer = require('mineflayer');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot aktif!');
});

server.listen(process.env.PORT || 3000);

function createBot() {
  const bot = mineflayer.createBot({
    host: 'noluyobabaaa.aternos.me',
    port: 55768,
    username: 'nakruff.',
    auth: 'offline',
    version: '1.21.11'
  });

  bot.on('spawn', () => {
    console.log('Bot sunucuya girdi!');
  });

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  }, 180000);

  bot.on('kicked', () => {
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log(err);
  });
}

createBot();