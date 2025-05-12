# Dockerfile for Next.js application

# Stage 1: Install dependencies and build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# If you use yarn, uncomment the next line and comment out the npm ci line
# COPY yarn.loc k ./

# Install dependencies
RUN npm ci
# If you use yarn, uncomment the next line and comment out the npm ci line
# RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Set build-time arguments
ARG NEXT_PUBLIC_APP_ENV

# Build the Next.js application
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
# If you need node_modules for runtime (e.g. for next start), uncomment the next line
# COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# Install production dependencies
RUN npm ci --omit=dev

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables (optional, can be overridden at runtime)
ENV NODE_ENV=production
# ENV PORT=3000 # Next.js typically uses PORT internally based on the -p flag

# Command to run the application
# By default, Next.js uses `next start`. If you have a custom server, adjust accordingly.
# The `-p 3000` flag is not strictly needed if PORT env var is set and used by `next start`
# or if you rely on the default port 3000.
CMD ["npm", "start"] 