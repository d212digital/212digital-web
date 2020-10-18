FROM node:12
WORKDIR /212digital
COPY /template .
RUN yarn cache clean
RUN yarn install
EXPOSE 3000