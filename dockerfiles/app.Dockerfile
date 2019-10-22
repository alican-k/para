FROM node:13.0.1-alpine AS builder

# We set our workspace to /app and copy the package.json and package-lock.json
WORKDIR /app

COPY package*.json ./

# RUN npm ci installs dependencies directly from package-lock.json and uses
# package.json only to validate that there are no mismatched versions. If any
# dependencies are missing or have incompatible versions, it will throw an
# error.
# RUN npm ci

COPY . .

RUN npm run build

###############################
# Stage Final
FROM alpine:3.10
LABEL maintainer="kareem@joinpara.com"

WORKDIR /app

RUN apk add --update --no-cache \
  build-base=0.5-r1 \
  yarn=1.16.0-r0

RUN yarn global add serve

# Add user
RUN addgroup -g 1000 -S app \
 && adduser -u 1000 -S app -G app
USER app

COPY --from=builder --chown=app:app /app/build .

USER app

CMD ["serve", "-p", "7272", "-s", "."]
