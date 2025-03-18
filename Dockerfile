FROM node:18-alpine

WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the code
COPY . .

# Build the project
RUN npm run build

EXPOSE 3005

CMD ["npm", "run", "start"]
