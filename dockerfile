FROM node:20-alpine
ADD . /app
WORKDIR /app
RUN npm run build
CMD ["npm", "start"]