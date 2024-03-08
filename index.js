const Fastify = require('fastify');
const server = Fastify();
console.log('hello')
server.register(require('@fastify/http-proxy'), {
    upstream: 'https://coolify.io/docs',
    prefix: '/docs',
});
server.register(require('@fastify/http-proxy'), {
    upstream: 'https://coolify.io/',
    prefix: '/',
});

server.listen({ host: '0.0.0.0', port: 3000 });