/**
 * @author: zuojj(zuojj.com@gmail.com)
 * @description:
 * @Date: 2023-04-18 10:13:21
 */

const express = require('express');
const app = express();
const port = 3600;
const fs = require('fs');
const path = require('path');

/**
 * 首页
 */
app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/html'
  });
  res.write(fs.readFileSync(path.resolve(__dirname, './src/app.html')));
  res.end();
});

/**
 * SSE
 */
app.get('/sse', (req, res) => {
  res.set({
    'Content-Type': 'text/html'
  });
  res.write(fs.readFileSync(path.resolve(__dirname, './src/page/sse.html')));
  res.end();
});

/**
 * FETCH SSE
 */
app.get('/fetch/sse', (req, res) => {
  res.set({
    'Content-Type': 'text/html'
  });
  res.write(fs.readFileSync(path.resolve(__dirname, './src/page/fetch_sse.html')));
  res.end();
});

/**
 * api接口
 */
app.get('/api/stream', (req, res) => {
  const { message = '', type='' } = req.query
  // 标识内容以Stream形式响应
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  // 循环响应
  let step = 0;
  const time = setInterval(() => {
    const data = { message: message[step++]};

    // type: fetch fetch+sse模式，默认为sse模式
    if (type === 'fetch') {
      res.write(`${JSON.stringify(data)}`);
    } else {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    }
    if (step > message.length - 1) {
      res.end()
      clearInterval(time)
    }
  }, 100);
});
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));