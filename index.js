const Fastify = require('fastify');
const server = Fastify();

server.register(require('@fastify/http-proxy'), {
    upstream: 'https://coolify.io/docs/',
    preValidation: (req, reply, done) => {
        console.log(req)
        console.log('preValidation');
        done();
    },
    prefix: '/docs/',
});
server.register(require('@fastify/http-proxy'), {
    upstream: 'https://coolify.io/',
    prefix: '/',
});

server.listen({ port: 3000 });