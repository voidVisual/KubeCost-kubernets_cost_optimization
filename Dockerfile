# Stage 1: Install dependencies and build the application
FROM node:20-slim AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --omit=dev

# Copy the rest of the application source code
COPY . .

# Set build-time arguments
ARG NEXT_PUBLIC_GENKIT_API_HOST="http://localhost:4000"

# Build the Next.js application
RUN npm run build


# Stage 2: Create the production image
FROM node:20-slim AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy built assets from the previous stage
COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
