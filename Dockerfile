FROM oven/bun:alpine
WORKDIR /app
COPY . .
EXPOSE 3000
RUN bun install
CMD bun run start