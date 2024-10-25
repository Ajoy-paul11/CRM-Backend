# CRM Backend API

A robust Customer Relationship Management (CRM) backend API built with Express, MongoDB, and Mongoose. This API provides endpoints for managing leads, campaigns, and generating reports.

## Features

- RESTful API design
- CRUD operations for leads and campaigns
- Report generation in PDF and CSV formats
- MongoDB integration for data persistence
- Express.js for efficient routing and middleware support
- Mongoose for elegant MongoDB object modeling

## API Endpoints

### Leads API

Base URL: `/api/v1/leads`

- `POST /create`: Add a new lead
- `GET /all`: Retrieve all leads
- `GET /:id`: Retrieve a specific lead
- `PUT /:id`: Update a lead's details
- `DELETE /:id`: Delete a lead

### Campaigns API

Base URL: `/api/v1/campaigns`

- `POST /create`: Create a new campaign
- `GET /all`: Retrieve all campaigns
- `GET /:id`: Retrieve a specific campaign
- `PUT /:id`: Update a campaign's details
- `DELETE /:id`: Delete a campaign

### Reports API

Base URL: `/api/v1/reports`

- `GET /pdf`: Generate a PDF report about leads and campaigns
- `GET /csv`: Generate a CSV file with lead details

## Prerequisites

- Node.js (v14 or later)
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Ajoy-paul11/CRM-Backend
   ```
2. Navigate to the project
   ```sh
   cd CRM-Backend
   ```
3. Install NPM package
   ```sh
   npm install
   ```
4. Run development server
   ```sh
   npm run start
   ```

## Usage:

You can use tools like Postman or curl to interact with the API.

## ## Contact

<p align="left"> <a href="https://twitter.com/ajoy_paul11" target="blank"><img src="https://img.shields.io/twitter/follow/ajoy_paul11?logo=twitter&style=for-the-badge" alt="ajoy_paul11" /></a> </p>

<a href="https://linkedin.com/in/ajoypaul" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajoypaul" height="30" width="40" /></a>
