FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 3000
# FROM nginx:latest
# COPY nginx.conf /etc/nginx/nginx.conf
