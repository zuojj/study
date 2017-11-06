const Koa = require('koa');
const app = new Koa();


app.use(async(ctx) => {
    ctx.body = 'Hello Koa2';
});


app.listen(3000);

console.log('Running at port http://localhost:3000');