// Copyright 2025 fortu
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Import the required packages
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


// Initialize the Express app
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('Hello, world! Your server is running.');
});


// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
