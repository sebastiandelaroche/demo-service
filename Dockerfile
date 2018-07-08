FROM node:8
EXPOSE 3000
WORKDIR /app
COPY . .
RUN yarn
CMD ["yarn", "start"]