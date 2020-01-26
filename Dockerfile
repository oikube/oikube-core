FROM node:10-alpine
# Defines our working directory in container
WORKDIR /usr/src/app

# Copies the package.json first for better cache on later pushes
COPY package.json yarn.lock ./

# This install npm dependencies on the resin.io build server,
# making sure to clean up the artifacts it creates in order to reduce the image size.
RUN JOBS=MAX yarn  --production

# This will copy all useful files to the container
COPY build data ./

VOLUME ["/usr/src/app/data"]

# server.js will run when container starts up on the device
CMD ["npm", "start"]