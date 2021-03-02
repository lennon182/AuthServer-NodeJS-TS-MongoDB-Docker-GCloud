# 🔥 AuthServer-NodeJS-TS-MongoDB-Docker-GCloud v0.0.1 🐳

## 🔥 Tech's:

<br>

    - TypeScript
    - NodeJs
    - MongoDB
    - JWT

    dependencies": {
    "bcrypt": "^5.0.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.13"}

<br>

<br>

## 🔥 Test it run:

<br>
First:

    - create .env file like this:
        PORT=
        PUBLIC_PORT=
        DB_URI=
        JWT_KEY=

Next:

    - `docker-compose build`

    - `docker-compose up -d`

<b><br>

Deploy to Google Cloud Run

    - `gcloud builds submit .`

#

## 🔥 Features:

<br>

### 🟢 Docker 🐳:

    - Dockerfile
    - docker-compose.yml
    - cloudbuild.yml
        - This file for continuous deployment on Google cloud

### 🟢 Two Containers:

    1.  ApiStore: Node From typeScript Source
        - Source production in "dist" folder
        - Exposed Port: 3000

<br>

### 🔥 MIDDLEWARES based on JWT Tokens

<br>

### 🟢 AUTH

    - Register Store Admin
    - Login Store Admin
    - Register Customers in App
    - Login Customers in App

### 🟢 USERS

    - Get Users

### 🟢 CUSTOMERS

    - Get Customers Based Roles

<b>
