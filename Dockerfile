# adapted from https://github.com/vercel/next.js/tree/canary/examples/with-docker
# needs next.config.js to set build to stand-alone with context as follows
# /** @type {import('next').NextConfig} */
# module.exports = {
#  output: 'standalone',
# }

# Recommended to have .dockerignore file with the following content
# Dockerfile
# .dockerignore
# node_modules
# npm-debug.log
# README.md
# .next
# .git

# Install dependencies only when needed
FROM registry.access.redhat.com/ubi8/nodejs-18 AS deps
USER root
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM registry.access.redhat.com/ubi8/nodejs-18 AS builder
USER root
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# If using yarn uncomment out and comment out npm below
# RUN yarn build

# If using npm comment out above and use below instead
RUN npm run build

# Production image, copy all the files and run next
FROM registry.access.redhat.com/ubi8/nodejs-18-minimal AS runner
USER root
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to enable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=1001:1001 /app/.next/standalone ./
COPY --from=builder --chown=1001:1001 /app/.next/static ./.next/static

USER 1001

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
