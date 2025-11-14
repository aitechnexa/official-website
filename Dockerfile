# Multi-stage build for Vite + React app

# 1) Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Install deps first (use package*.json for better caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy rest of the source and build
COPY . .
RUN npm run build

# 2) Production stage (Node running a static file server)
FROM node:22-alpine AS runner

WORKDIR /app

# Install a small static file server
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Expose the port serve will listen on
EXPOSE 4173

# Run the static file server
CMD ["serve", "-s", "dist", "-l", "4173"]
