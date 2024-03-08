Bun.serve({
    port: 3000,
    development: true,
    async fetch(req) {
        try {
            const url = new URL(req.url);
            console.log(url.pathname)
            if (url.pathname.startsWith("/docs")) {
                const DOCS_URL = "https://coolify.io/docs";
                let proxyRequest = new Request(url.href, {
                    ...req,
                    referrerPolicy: "no-referrer-when-downgrade"
                });
                proxyRequest.headers.set("Host", DOCS_URL);
                proxyRequest.headers.set("X-Forwarded-Host", url.hostname);
                proxyRequest.headers.set("X-Forwarded-Proto", url.protocol.replace(":", ""));
                return fetch(proxyRequest);
            }
            return new Response("Not a proxied request", { status: 404 });
        } catch (e) {
            console.log(e)
            return new Response("Not a proxied request", { status: 404 });
        }
    },
});