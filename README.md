# Simple REST API with Express.js

## Setup Instructions

1. Clone the repo  
2. Run `npm install`  
3. Start server with `node index.js`  
4. API runs at `http://localhost:3000`

## API Endpoints

### GET /
- Returns "Hello World!"

### GET /items
- Returns all items

### GET /items/:id
- Returns item by ID

### POST /items
- Body: `{ "name": "Item X", "description": "Something" }`

### PUT /items/:id
- Updates item by ID

### DELETE /items/:id
- Deletes item by ID

## Example Request
```http
POST /items
Content-Type: application/json

{
  "name": "New Item",
  "description": "Details"
}
