FROM node:18.12.1-buster-slim AS builder

WORKDIR /app
COPY package.json package-lock.json index.html postcss.config.js tailwind.config.js tsconfig.json tsconfig.node.json vite.config.ts ./
COPY public/ public/
COPY src/ src/
RUN npm ci

EXPOSE 5173
CMD ["npm", "run", "dev:host"]
