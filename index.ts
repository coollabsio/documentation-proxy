Bun.serve({
    port: 3000,
    development: true,
    async fetch(req) {
        try {
            const url = new URL(req.url);
            if (url.pathname.startsWith("/docs")) {
                const DOCS_URL = "https://docs.coolify.io";
                const CUSTOM_URL = "https://coolify.io";
                let url = new URL(req.url);
                url.hostname = DOCS_URL;
                let proxyRequest = new Request(req);
                proxyRequest.headers.set("Host", DOCS_URL);
                proxyRequest.headers.set("X-Forwarded-Host", CUSTOM_URL);
                proxyRequest.headers.set('X-Forwarded-Proto', 'https');
                return await fetch(proxyRequest);
            }
            return await fetch(req);
        } catch (e) {
            return await fetch(req);
        }
    },
});