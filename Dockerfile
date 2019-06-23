FROM node:latest AS builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run build

FROM node:latest
RUN yarn global add serve
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build .
CMD ["serve", "-p", "80", "-s", "."]