
# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app
RUN npm install

# Copy the rest of the application
COPY . /app

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
