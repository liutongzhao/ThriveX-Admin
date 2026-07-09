FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_PROJECT_API=/api
ARG VITE_BASE=/admin/
ENV VITE_PROJECT_API=${VITE_PROJECT_API}
ENV VITE_BASE=${VITE_BASE}

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.d /docker-entrypoint.d
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
