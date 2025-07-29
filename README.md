# BFHL API

This is a REST API built for the Bajaj Finserv Health Limited (BFHL) assignment. The API processes an array of data and returns specific information according to the requirements.

## API Endpoint

- **Method**: POST
- **Route**: `/bfhl`
- **Base URL**: https://bajaj-assignment-xndh.onrender.com
- **Expected status code for successful requests**: 200

## How to Test the API

You can test the API using [Postman](https://www.postman.com/), [curl](https://curl.se/), or [Hoppscotch](https://hoppscotch.io/).

### Example Request

POST https://bajaj-assignment-xndh.onrender.com/bfhl

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Example using curl

```sh
curl -X POST https://bajaj-assignment-xndh.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

### Example Response

```json
{
  "is_success": true,
  "user_id": "aditya_chawla_20012005",
  "email": "aditya62.be22@chitkara.edu.in",
  "roll_number": "2210990062",
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
- Creates a concatenated string of alphabets in reverse order with alternating caps (starting with uppercase)
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

## About

BFHL API implementation for Bajaj Finserv Health Limited assignment