FROM node:10.16.0-alpine
WORKDIR '/var/www/proxy'

COPY . .
EXPOSE 6060
CMD ["npm", "start"]
