const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(require('morgan')('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
    res.type('text/html');
    res.render('index', {
        title: 'home',
        body: 'Hello World'
    });
});
let form = {};

app.get('/form', (req, res) => {
    res.type('text/html');
    res.render('form', {
        title: '登录',
        username: '',
        userpass: '',
        success: false
    });
});

app.post('/submit', (req, res) => {
    res.type('text/plain');
    let {
        username,
        userpass
    } = req.body;

    form = {
        username,
        userpass
    }
    if (username && userpass && username.trim() && userpass.trim()) {
        res.redirect(303, '/success')
    } else {
        // res.redirect(303, '/error')
    }
});

app.get('/success', (req, res) => {
    res.type('text/html');
    res.render('form', {
        title: '提交成功！！！',
        username: form.username || '煦涵',
        userpass: form.userpass || '123456',
        success: true
    });
});

// 错误页
app.get('/error', (req, res) => {
    res.type('text/html');
    res.render('error');
});

// 404
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// 500
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctr + C to terminate.');
});