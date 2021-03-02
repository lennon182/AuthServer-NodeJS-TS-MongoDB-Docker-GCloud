FROM node

# FROM .env IF USE CLOUDBUILD
ENV DB_URI=mongodb+srv://appstoremaster:MongoDB@storeapp-qatcj.mongodb.net/StoreApp?retryWrites=true&w=majority
ENV JWT_KEY=Sup3rS3cr3tK3y
# ENV PORT=${PORT}
# ENV PUBLIC_PORT=${PUBLIC_PORT}

RUN mkdir -p /app/server-store

WORKDIR /app/server-store

COPY package*.json ./

COPY ./dist ./

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]