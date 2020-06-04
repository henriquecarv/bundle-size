# 
# Build stage.
# This state builds our TypeScript and produces an intermediate Docker image containing the compiled JavaScript code.
#
FROM node:lts-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY components ./components/
COPY config ./config/
COPY helpers ./helpers/
COPY interfaces ./interfaces/
COPY styles ./styles/
COPY pages ./pages/
COPY public ./public/
COPY server ./server/

COPY ./tsconfig*.json ./
COPY ./.babelrc ./
COPY ./*.d.ts ./


ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN yarn build


#
# Production stage.
# This stage pulls the compiled JavaScript code from the stage 1 intermediate image.
# This stage builds the final Docker image that we'll use in production.
#
FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --prod --frozen-lockfile

COPY --from=build /app/dist ./dist
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

COPY entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]




