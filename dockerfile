# Use a node base image
FROM node:20.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json first (for caching purposes)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the project (assuming there is a build step, e.g., for TypeScript or Webpack)
RUN npm run build

# Expose the port that the app will run on
EXPOSE 8000

# Command to start the app
CMD ["npm", "run", "start"]
