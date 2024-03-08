Bun.serve({
    port: 3000,
    development: true,
    async fetch(req) {
        try {
            const url = new URL(req.url);
            if (url.pathname.startsWith("/docs")) {
                console.log(req.url)
                const DOCS_URL = "https://coolify.io/docs";
                const proxyUrl = new URL(DOCS_URL);
                const headers = new Headers(req.headers);

                headers.set("Host", DOCS_URL);
                headers.set("X-Forwarded-Host", url.hostname);
                headers.set("X-Forwarded-Proto", url.protocol.replace(":", ""));
                console.log(proxyUrl)
                return fetch(proxyUrl.href, {
                    method: req.method,
                    headers: headers,
                    body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
                    redirect: req.redirect,
                  });
            }
            return new Response("Not a proxied request", { status: 404 });
        } catch (e) {
            console.log(e)
            return new Response("Not a proxied request", { status: 404 });
        }
    },
});