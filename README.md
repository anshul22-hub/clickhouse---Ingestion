Here is the `README.md` content in Markdown format, ready to use in your GitHub repository:

```markdown
# ClickHouse & Flat File Bidirectional Data Ingestion Tool

## Project Overview:
This web-based application facilitates **bidirectional data ingestion** between a **ClickHouse database** and **Flat File (CSV)** platforms. The tool allows users to:
- Ingest data from ClickHouse to Flat File
- Ingest data from Flat File to ClickHouse
- Use JWT authentication for ClickHouse connection
- Select columns for ingestion
- Preview data before full ingestion
- Report total records ingested upon completion

## Tech Stack:
- **Frontend:**
  - React
  - TypeScript
  - EJS
- **Backend:**
  - Node.js
  - Express
  - TypeScript
- **Database:**
  - ClickHouse
- **Libraries & Tools:**
  - Axios
  - JWT
  - CSV Parser

## Folder Structure:
```
project-root/
├── server/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       ├── routes.ts
│       ├── controllers/
│       │   └── ingestionController.ts
│       └── services/
│           ├── clickHouseService.ts
│           └── fileService.ts
├── client/
│   ├── package.json
│   ├── tsconfig.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.tsx
│       ├── App.tsx
│       └── components/
│           ├── ConnectionForm.tsx
│           ├── TableSelector.tsx
│           ├── DataPreview.tsx
│           └── IngestionStatus.tsx
└── README.md
```

## Setup Instructions:

### Prerequisites:
- Node.js (v18+)
- npm (Node Package Manager) or yarn (Optional)
- Docker (Optional, for running ClickHouse locally)

### Steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/clickhouse-flatfile-ingestion-tool.git
   cd clickhouse-flatfile-ingestion-tool
   ```

2. **Backend Setup:**
   ```bash
   cd server
   npm install
   ```
   - Create a `.env` file in the `server` folder and set the ClickHouse connection details:
   ```dotenv
   CLICKHOUSE_HOST=localhost
   CLICKHOUSE_PORT=8123
   CLICKHOUSE_DATABASE=default
   CLICKHOUSE_USER=default
   CLICKHOUSE_PASSWORD=your-jwt-token
   ```

3. **Frontend Setup:**
   ```bash
   cd client
   npm install
   ```
   - You can modify any configuration in the frontend as needed in the `client/src/components/ConnectionForm.tsx` file.

4. **Run the Backend:**
   ```bash
   cd server
   npm run dev
   ```
   The backend will run on `http://localhost:5000`.

5. **Run the Frontend:**
   ```bash
   cd client
   npm start
   ```
   The frontend will be available on `http://localhost:3000`.

## Usage:

### Data Ingestion:
- **ClickHouse to Flat File:**
  After selecting ClickHouse as the data source, choose a table and select columns to export. Click "Start Ingestion" to download the CSV file.
  
- **Flat File to ClickHouse:**
  Select a CSV file and configure the columns to be imported. The backend will ingest the data into ClickHouse.

### JWT Authentication:
The application uses JWT for authentication when accessing the ClickHouse database. Ensure you pass the correct token in the configuration form on the frontend.

### Data Preview:
Before ingestion, you can preview the first 100 records by clicking the **Preview** button. This helps ensure the selected columns are correct.

## Testing:

### Test Cases:
1. **Single ClickHouse table to Flat File:**
   Verify count and columns.
   
2. **Flat File to New ClickHouse table:**
   Verify successful ingestion and data integrity.
   
3. **Multi-table Join (Bonus):**
   Allows joining multiple ClickHouse tables and exporting the result to a Flat File.

4. **Authentication Failures:**
   Simulate invalid JWT and check error handling.

5. **Data Preview:**
   Check preview before full ingestion.

### Datasets:
You can use official [ClickHouse example datasets](https://clickhouse.com/docs/en/getting-started/example-datasets/) for testing.

## License:
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact:
- **Name:** Piyush Kumar
- **Email:** your-email@example.com
- **GitHub Profile:** Your GitHub Profile Link
- **LinkedIn Profile:** Your LinkedIn Profile Link
```

---

You can copy and paste this directly into your `README.md` file in your GitHub repository. If you need further modifications or details added, let me know!
