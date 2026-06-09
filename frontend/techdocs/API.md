# BookTracker API Documentation

## Overview

This API powers the BookTracker application.  
It handles creating, reading, updating, and deleting books.

Built with:
- Node.js
- Express
- MariaDB

The API is used by a JavaScript frontend via `fetch()` requests.

---

## Base URL
````
http://localhost:3007
````



## Book Data Model

Each book in the database has this structure:

```json
{
  "id": 1,
  "user_id": 1,
  "title": "Dune",
  "author": "Frank Herbert",
  "status": "reading",
  "rating": 5,
  "review": "Amazing book",
  "created_at": "2026-06-08T10:00:00.000Z",
  "updated_at": "2026-06-08T10:00:00.000Z"
}
```

## Endpoints

Get all books 
***
**GET /books**

Returns all books in the database.

Response:
```JSON
[
  {
    "id": 1,
    "title": "Dune",
    "author": "Frank Herbert",
    "status": "reading"
  }
]
```
Get recent books
***
**GET /recent-books**
Returns the 3 most recently added books.

Ordered by created_at DESC
Limited to 3 results
Response:
```JSON
[
  {
    "title": "Dune",
    "author": "Frank Herbert"
  }
]
```

Create a new book
***
**POST /books**

Creates a new book entry.

Request body:
```JSON
{
  "title": "Dune",
  "author": "Frank Herbert",
  "status": "reading",
  "rating": 5,
  "review": "Amazing book"
}
```
 Response:
 ```JSON
 {
  "message": "Book created successfully"
}
```

Update a book
***
**PATCH /books/:id**

Updates an existing book.

Example:
```PATCH /books/3```

Request body:
```JSON
{
  "title": "Dune 2",
  "author": "Frank Herbert",
  "status": "finished",
  "rating": 5,
  "review": "Updated review"
}
```
Response:
```JSON
{
  "message": "Book updated successfully"
}
```

Delete a book
***
**DELETE /books/:id**

Deletes a book from the database.

```JSON
Response:
{
  "message": "Book deleted successfully"
}
```

Error Handling
```JSON
500 Internal Server Error
{
  "error": "Database error"
}
```
---
Security Notes
---
- Uses parameterized queries (?) to prevent SQL injection
- Uses connection pooling for performance
- Backend validates all incoming data
- Frontend communicates via REST API using fetch()

---
Architecture
---
````
Frontend (HTML/CSS/JS)
        ↓ fetch()
Express API (Node.js)
        ↓
MariaDB Database
````
