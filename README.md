# BFHL API

This is a REST API built for the Bajaj Finserv Health Limited (BFHL) assignment. The API processes an array of data and returns specific information according to the requirements.

## API Endpoint

- **Method**: POST
- **Route**: `/bfhl`
- **Expected status code for successful requests**: 200

## Request Format

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Response Format

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Features

- Processes an array of data and categorizes elements into numbers (odd/even), alphabets, and special characters
- Calculates the sum of all numbers
- Creates a concatenated string of alphabets in reverse order with alternating caps
- Returns user information (user_id, email, roll_number)

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   ```
4. Start the server: `npm start`

## Development

For development with auto-restart:

```
npm run dev
```

## Deployment

This API can be deployed on various platforms such as Vercel, Railway, Render, or Heroku.

## Testing

You can test the API using tools like Postman or curl:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"data": ["a", "1", "334", "4", "R", "$"]}' http://localhost:3000/bfhl
```