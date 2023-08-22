FROM node:18
# Create app directory
WORKDIR /usr/src/app
#NodeJs and NPM already installed in the image
#Install node app dependencies
COPY package*.json ./
RUN npm install

#Copy other files
COPY . .
EXPOSE 80
CMD ["npm", "start"]