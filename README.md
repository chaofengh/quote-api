# Quote API

This project is a simple Quote API built with Express.js. It allows users to fetch, add, update, and delete quotes. The application consists of a server-side backend and a client-side frontend with multiple HTML pages for different functionalities.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Frontend Pages](#frontend-pages)
- [Usage](#usage)
- [License](#license)

## Project Overview

The Quote API allows users to perform the following actions:
- Fetch a random quote
- Fetch all quotes
- Fetch quotes by author
- Add a new quote
- Update an existing quote
- Delete an existing quote

## Features

- **Express.js Backend**: Handles API requests and serves static files.
- **RESTful API**: Follows REST principles for API design.
- **Frontend Pages**: Separate pages for fetching, adding, updating, and deleting quotes.
## ScreenShot
![Screenshot 2024-06-25 at 3 54 19 PM](https://github.com/chaofengh/quote-api/assets/73614799/b2b016cd-bcc2-428b-b125-e728cd253a16)
![Screenshot 2024-06-25 at 3 54 12 PM](https://github.com/chaofengh/quote-api/assets/73614799/5e47acc2-3f39-4f32-9875-75821147d1bc)
![Screenshot 2024-06-25 at 3 53 43 PM](https://github.com/chaofengh/quote-api/assets/73614799/3ae372b6-3f1e-44e1-a77a-4dd1a9668f7d)
![Screenshot 2024-06-25 at 3 52 54 PM](https://github.com/chaofengh/quote-api/assets/73614799/4fa6b8e1-324b-4300-bd19-4a5116fba960)
![Screenshot 2024-06-25 at 3 52 22 PM](https://github.com/chaofengh/quote-api/assets/73614799/6148334c-a1f5-45d7-98c4-0de1b45e38c6)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/quote-api.git
   cd quote-api
2. **Install dependencies**:
   npm install
3. **start the server**:
   node server.js
4. **open your browser and navigate to 'http://localhost:4001'**

## Frontend Pages

### Home Page (index.html)
Allows users to:

- Fetch a random quote
- Fetch all quotes
- Fetch quotes by author
- Add Quote Page (add-quote.html)
- Allows users to add a new quote by providing the quote text and author.

### Update Quote Page (update-quote.html)
- Allows users to update an existing quote by providing the quote ID, new quote text, and new author.

### Delete Quote Page (delete-quote.html)
- Allows users to delete an existing quote by providing the quote ID.

### Usage
1. Fetch a Random Quote: Click the "Fetch a Random Quote" button on the home page.
2. Fetch All Quotes: Click the "Fetch all Quotes" button on the home page.
3. Fetch Quotes by Author: Enter an author's name and click the "Fetch by Author" button on the home page.
4. Add a New Quote: Navigate to the "Add a New Quote" page, enter the quote text and author, and click the "Submit Your Quote" button.
5. Update an Existing Quote: Navigate to the "Update a Quote" page, enter the quote ID, new quote text, and new author, and click the "Update Quote" button.
6. Delete an Existing Quote: Navigate to the "Delete a Quote" page, enter the quote ID, and click the "Delete Quote" button.
