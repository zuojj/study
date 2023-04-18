const express = require('express');
const app = express();
const port = 3600;
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/html'
  });
  res.write(fs.readFileSync(path.resolve(__dirname, './src/app.html')));
  res.end();
});

app.get('/sse', (req, res) => {
  res.set({
    'Content-Type': 'text/html'
  });
  res.write(fs.readFileSync(path.resolve(__dirname, './src/page/sse.html')));
  res.end();
});

app.get('/fetch/sse', (req, res) => {
  res.set({
    'Content-Type': 'text/html'
  });
  res.write(fs.readFileSync(path.resolve(__dirname, './src/page/fetch_sse.html')));
  res.end();
});

app.get('/fetch/sse/stream', (req, res) => {
  const { message = '' } = req.query
  // 3个请求头重点，需要返回text/event-stream，告知浏览器以何种类型解析
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  let step = 0;
  // 定时器依次返回message
  const time = setInterval(() => {
    const data = { message: message[step++]};
    // 每个消息以 \n\n分割
    res.write(`${JSON.stringify(data)}`);
    if (step > message.length - 1) {
      res.end()
      clearInterval(time)
    }
  }, 100);
});

app.get('/sse/stream', (req, res) => {
  const { message = '' } = req.query
  // 3个请求头重点，需要返回text/event-stream，告知浏览器以何种类型解析
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  let step = 0;
  // 定时器依次返回message
  const time = setInterval(() => {
    const data = { message: message[step++]};
    // 每个消息以 \n\n分割
    res.write(`data: ${JSON.stringify(data)}\n\n`);
    if (step > message.length - 1) {
      res.end()
      clearInterval(time)
    }
  }, 100);
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));