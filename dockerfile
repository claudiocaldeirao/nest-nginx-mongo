FROM node
ADD . /app
WORKDIR /app
RUN yarn run build
CMD ["npm", "start"]