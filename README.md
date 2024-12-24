# Express.js JSON Parsing Failure
This repository demonstrates a common issue in Express.js applications where the `express.json()` middleware fails to correctly parse incoming JSON payloads, leading to an empty `req.body` object.

## Bug Description
The provided Express.js application uses the `express.json()` middleware to parse JSON requests.  However, due to a specific configuration or error, it fails to correctly parse the JSON data received in the `POST` request to the `/data` route, resulting in `req.body` being an empty object, despite the request apparently sending valid JSON data.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Send a POST request to `http://localhost:3000/data` with a JSON payload (e.g., using Postman or curl).
5. Observe that the server logs an empty object for `req.body`, indicating a parsing failure.

## Solution
The solution involves ensuring that the `express.json()` middleware is correctly configured and placed in the correct order.  In some cases, additional middleware might interfere.
The solution file demonstrates correct setup and usage.