###############################
# Stage nodejs
FROM node:12.13.0-alpine AS nodejs

###############################
# Stage Final
FROM alpine:3.10
LABEL maintainer="kareem@joinpara.com"

RUN apk add --update --no-cache build-base

# Add user
RUN addgroup -g 1000 -S app \
 && adduser -u 1000 -S app -G app
USER app

COPY --from=nodejs --chown=app:app /usr/local/bin/node /usr/local/bin/
COPY --from=nodejs --chown=app:app /usr/local/lib/node_modules/ /usr/local/lib/node_modules/

USER root
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
RUN npm install -g redoc-cli
USER app

WORKDIR /app

USER root
RUN date -u > BUILD_TIME

USER app

# start up
CMD ["redoc-cli", "serve", "-w", "docs.yml"]
