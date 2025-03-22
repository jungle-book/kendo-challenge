FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app


FROM base AS build
RUN pnpm install
RUN pnpm run build

FROM nginx:1.25.4-alpine3.18

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /var/www/html/

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]