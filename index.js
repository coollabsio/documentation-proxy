const Fastify = require('fastify');
const server = Fastify();

server.register(require('@fastify/http-proxy'), {
    upstream: 'https://coolify.io/docs',
    prefix: '/docs',
});

server.listen({ port: 3000 });