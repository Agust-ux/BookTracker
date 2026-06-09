# BookTracker – Oppsett (Setup Guide)

## Overview

This document explains how to set up and run the BookTracker project locally.  
The project consists of:

- Frontend (HTML, CSS, JavaScript)
- Backend (Node.js + Express)
- Database (MariaDB)

---

## Project Structure
```tree
.
├── backend
│   ├── bookTracer.sql
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── frontend
    ├── css
    │   ├── index.css
    │   ├── mine_boker.css
    │   └── style.css
    ├── faq.html
    ├── hjelp.html
    ├── img
    │   └── Logo.png
    ├── index.html
    ├── js
    │   ├── index.js
    │   ├── mineBoker.js
    │   └── script.js
    ├── mine_boker.html
    ├── personvern.html
    ├── system flow
    │   └── ER diagram.pdf
    └── techdocs
        ├── API.md
        ├── Oppsett.md
        ├── Prosjektbeskrivelse.md
        └── Videre utvikling.md

8 directories, 21 files
```


---

## Requirements

Before running the project, install:

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- MariaDB (or MySQL)
- Git (optional)

---

## Backend Setup

### 1. Navigate to backend folder

```bash
cd backend
```
## 2. Install dependencies
```bash
npm install
```
Required packages:
```
express
mariadb
dotenv
cors (if frontend not served directly in backend)
``` 

## 3. Create .env file

Create a file called .env:
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_DATABASE=booktracker
```

## 4. Start server
```bash
node server.js
```
Server runs on:
```
http://localhost:3007
```

# Database Setup

## 1. Create database
````mariadb
CREATE DATABASE booktracker;
````

## 2. Create tables

Example books table:
````mariadb
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    status ENUM('want_to_read', 'reading', 'finished') NOT NULL,
    rating INT,
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
````
## Frontend Setup

The frontend is served through the Express backend using:

```js
app.use(express.static(path.join(__dirname, "../Frontend")));
```

# API Connection

## Frontend communicates with backend using:
```
http://localhost:3007
```
Example:
```
fetch("http://localhost:3007/books")
```

## Running the Project
Step-by-step:

1. Start MariaDB

2. Start backend server:
```bash
nodemon server.js
```

3. Open in browser:
```
http://localhost:3007
```

# Common Issues
1. Backend not starting
- Check .env file
- Ensure MariaDB is running

2. API not working
- Check port 3007
- Ensure backend is running

3. CORS errors
- Install and enable cors in backend if needed

