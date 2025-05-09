# -------- STAGE 1: Build (with dev dependencies) --------
FROM node:20-alpine AS builder
WORKDIR /app
# Install dev dependencies
COPY package*.json .
RUN npm ci
# Copy source code and build
COPY . .
# Compiles to /app/dist
RUN npm run build

# -------- STAGE 2: Dependencies only (prod) --------
FROM node:20-alpine AS deps
WORKDIR /app
# Copy only production-relevant files
COPY package*.json ./
# flag ignore scripts it's need  to avoid husky prepare from run inside docker build stages
RUN npm ci --omit=dev --ignore-scripts

# -------- STAGE 3: Runtime --------
FROM node:20-alpine AS runner
WORKDIR /app
# Copy dist and node_modules
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./
CMD ["node", "dist/main.js"]
