const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Constants
const PORT = process.env.PORT || 3000;
const USER_ID = 'aditya_chawla_20012005'; // User ID in the format full_name_ddmmyyyy
const EMAIL = 'aditya62.be22@chitkara.edu.in'; // User's email
const ROLL_NUMBER = '2210990062'; // User's roll number

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    try {
        // Get data from request body
        const { data } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: 'Invalid input: data must be an array'
            });
        }

        // Initialize arrays
        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        
        // Process each item in the data array
        data.forEach(item => {
            const strItem = String(item);
            
            // Check if item is a number
            if (/^\d+$/.test(strItem)) {
                const num = parseInt(strItem, 10);
                if (num % 2 === 0) {
                    evenNumbers.push(strItem);
                } else {
                    oddNumbers.push(strItem);
                }
            }
            // Check if item is an alphabet
            else if (/^[a-zA-Z]+$/.test(strItem)) {
                // Convert to uppercase for the response
                alphabets.push(strItem.toUpperCase());
            }
            // If not a number or alphabet, it's a special character
            else {
                specialCharacters.push(strItem);
            }
        });
        
        // Calculate sum of numbers
        const sum = [...oddNumbers, ...evenNumbers]
            .reduce((acc, curr) => acc + parseInt(curr, 10), 0)
            .toString();
        
        // Create concatenated string of alphabets in reverse order with alternating caps
        let concatString = '';
        const allAlphabets = alphabets.join('');
        const reversed = allAlphabets.split('').reverse().join('');
        for (let i = 0; i < reversed.length; i++) {
            concatString += i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
        }
        
        // Prepare and send response
        const response = {
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum,
            concat_string: concatString
        };
        
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error processing request:', error);
        return res.status(500).json({
            is_success: false,
            message: 'Internal server error'
        });
    }
});

// Add GET /bfhl route for help message
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        message: 'This endpoint only supports POST requests. To use, send a POST request with a JSON body like { "data": ["a", "1", "334", "4", "R", "$"] }.'
    });
});

// Root route for testing
app.get('/', (req, res) => {
    res.send('BFHL API is running. Use POST /bfhl to access the API.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});