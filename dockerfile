FROM node
ADD . /app
WORKDIR /app
RUN npm run build
CMD ["npm", "start"]