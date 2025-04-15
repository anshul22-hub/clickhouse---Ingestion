# ClickHouse & Flat File Bidirectional Data Ingestion Tool

### Developed by: Piyush Kumar – Software Engineer Intern

## Project Overview

This web-based application facilitates **bidirectional data ingestion** between a **ClickHouse database** and **Flat File (CSV)** platforms. The tool allows users to:

- Ingest data from ClickHouse to Flat File
- Ingest data from Flat File to ClickHouse
- Use JWT authentication for ClickHouse connection
- Select columns for ingestion
- Preview data before full ingestion
- Report total records ingested upon completion

---

## Tech Stack

- **Frontend**: React, TypeScript, EJS
- **Backend**: Node.js, Express, TypeScript
- **Database**: ClickHouse
- **Libraries/Tools**: Axios, JWT, CSV Parser, EJS Templates

---

## Folder Structure

project-root/ ├── server/ │ ├── package.json │ ├── tsconfig.json │ └── src/ │ ├── index.ts │ ├── routes.ts │ ├── controllers/ │ │ └── ingestionController.ts │ └── services/ │ ├── clickHouseService.ts │ └── fileService.ts ├── client/ │ ├── package.json │ ├── tsconfig.json │ ├── public/ │ │ └── index.html │ └── src/ │ ├── index.tsx │ ├── App.tsx │ └── components/ │ ├── ConnectionForm.tsx │ ├── TableSelector.tsx │ ├── DataPreview.tsx │ └── IngestionStatus.tsx └── README.md
---


---

## Setup Instructions

### Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (v18+)
- **npm** (Node Package Manager) or **yarn** (Optional)
- **Docker** (Optional, for running ClickHouse locally)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/clickhouse-flatfile-ingestion-tool.git
cd clickhouse-flatfile-ingestion-tool
2. Backend Setup
Navigate to the server directory and install the necessary dependencies:

bash
Copy
Edit
cd server
npm install
Configuration
Create a .env file in the server folder to set up your ClickHouse connection details:

ini
Copy
Edit
CLICKHOUSE_HOST=localhost
CLICKHOUSE_PORT=8123
CLICKHOUSE_DATABASE=default
CLICKHOUSE_USER=default
CLICKHOUSE_PASSWORD=your-jwt-token
3. Frontend Setup
Navigate to the client directory and install the necessary dependencies:

bash
Copy
Edit
cd client
npm install
Configuration
You can modify any configuration in the frontend as needed in the client/src/components/ConnectionForm.tsx file.

4. Run the Application
Backend
In the server directory, start the backend server:

bash
Copy
Edit
cd server
npm run dev
The backend will run on http://localhost:5000.

Frontend
In the client directory, start the frontend application:

bash
Copy
Edit
cd client
npm start
The frontend will be available on http://localhost:3000.

Usage
Data Ingestion
ClickHouse → Flat File: After selecting ClickHouse as the data source, choose a table and select columns to export. Click "Start Ingestion" to download the CSV file.

Flat File → ClickHouse: Select a CSV file and configure the columns to be imported. The backend will ingest the data into ClickHouse.

JWT Authentication
The application uses JWT for authentication when accessing the ClickHouse database. Ensure you pass the correct token in the configuration form on the frontend.

Data Preview
Before ingestion, you can preview the first 100 records by clicking the Preview button. This helps ensure the selected columns are correct.

Testing
The tool supports several test cases to validate functionality:

Single ClickHouse Table → Flat File (CSV): Verify count and columns.

Flat File (CSV) → New ClickHouse Table: Verify successful ingestion and data integrity.

Multi-Table Join (Bonus): Allows joining multiple ClickHouse tables and exporting the result to a Flat File.

Authentication Failures: Simulate invalid JWT and check error handling.

Data Preview: Check preview before full ingestion.

You can use official ClickHouse example datasets for testing.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Piyush Kumar

Email: [your-email@example.com]

GitHub: [Your GitHub Profile Link]

LinkedIn: [Your LinkedIn Profile Link]

Feel free to reach out if you have any questions!
