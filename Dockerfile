FROM node:latest
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .

RUN npm run --script build

EXPOSE 80:80
# Step 2

CMD node dist/main.js