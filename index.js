const Fastify = require('fastify');
const server = Fastify();
// server.register(require('@fastify/http-proxy'), {
//     upstream: 'https://docs.coolify.io/',
//     prefix: '/docs', // Set the prefix to '/docs'
//     rewritePrefix: '', // Ensure the path isn't rewritten
// });
server.register(require('@fastify/http-proxy'), {
    upstream: 'https://coollabstechnologiesbt.mintlify.dev/docs',
    prefix: '/', // Set the prefix to '/docs'
    //rewritePrefix: '/docs', // Ensure the path isn't rewritten
});

server.listen({ host: '0.0.0.0', port: 3000 });