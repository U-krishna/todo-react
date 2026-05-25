FROM public.ecr.aws/docker/library/node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM public.ecr.aws/docker/library/node:20-alpine AS test
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm test

FROM public.ecr.aws/docker/library/node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM public.ecr.aws/nginx/nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80