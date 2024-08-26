# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the necessary files to the container
COPY ./index.html /usr/src/app/index.html
COPY ./styles/styles.css /usr/src/app/styles/styles.css
COPY ./scripts/script.js /usr/src/app/scripts/script.js
COPY ./assets/img /usr/src/app/assets/img
COPY ./assets/data /usr/src/app/assets/data

# Install `serve` to serve the static files
RUN npm install -g serve

# Expose port 80 to the outside world
EXPOSE 80

# Serve the application
CMD ["serve", "-s", "/usr/src/app"]