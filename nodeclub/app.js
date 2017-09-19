const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const staticCache = require('koa-static-cache');
const errorhandler = require('koa-errorhandler');
const session = require('koa-generic-session');
const mongoStore = require('koa-generic-session-mongo');
const flash = require('koa-flash');
const gzip = require('koa-gzip');
const scheme = require('koa-scheme');
const router = require('koa-router');
const routerCache = require('koa-router-cache');
const render = require('koa-views');
const config = require('config-lite');

const merge = reuiqre('merge-descriptors');
const core = require('./lib/core');
const renderConf = require(config.renderConf);

merge(renderConf.locals || {}, core, false);

app.keys = [renderConf.locals.$app.name];

app.use(errorhandler());
app.use(bodyparser());
app.use(staticCache(config.staticCacheConf));
app.use(logger());
