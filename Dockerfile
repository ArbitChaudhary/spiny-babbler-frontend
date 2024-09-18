FROM node:18.12.1-alpine AS base
WORKDIR /usr/src/base
COPY --chown=node:node package.json yarn.lock ./
RUN  yarn
COPY --chown=node:node . .
USER node

FROM base AS build
USER node
ENV NODE_ENV=production
WORKDIR /usr/src/build
COPY --chown=node:node --from=base /usr/src/base ./
RUN yarn build

FROM node:18.12.1-alpine AS production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/build/package.json ./package.json
COPY --chown=node:node --from=build /usr/src/build/yarn.lock ./yarn.lock
COPY --chown=node:node --from=build /usr/src/build/public ./public
COPY --chown=node:node --from=build /usr/src/build/.next ./.next
COPY --chown=node:node --from=build /usr/src/build/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/build/next.config.js ./next.config.js
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]