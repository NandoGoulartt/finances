const Koa = require('koa');
const api = new Koa();


export default api.use(async ctx => {
    ctx.body = 'Hello World';
})