# ClickHouse & Flat File Bidirectional Data Ingestion Tool

## Project Overview:
  description: |
    This web-based application facilitates **bidirectional data ingestion** between a **ClickHouse database** and **Flat File (CSV)** platforms. The tool allows users to:
      - Ingest data from ClickHouse to Flat File
      - Ingest data from Flat File to ClickHouse
      - Use JWT authentication for ClickHouse connection
      - Select columns for ingestion
      - Preview data before full ingestion
      - Report total records ingested upon completion

## Tech Stack:
  frontend:
    - React
    - TypeScript
    - EJS
  backend:
    - Node.js
    - Express
    - TypeScript
  database:
    - ClickHouse
  libraries_tools:
    - Axios
    - JWT
    - CSV Parser

## Folder Structure:
  project-root:
    server:
      - package.json
      - tsconfig.json
      - src:
          - index.ts
          - routes.ts
          - controllers:
              - ingestionController.ts
          - services:
              - clickHouseService.ts
              - fileService.ts
    client:
      - package.json
      - tsconfig.json
      - public:
          - index.html
      - src:
          - index.tsx
          - App.tsx
          - components:
              - ConnectionForm.tsx
              - TableSelector.tsx
              - DataPreview.tsx
              - IngestionStatus.tsx
    README.md

## Setup Instructions:
  prerequisites:
    - Node.js (v18+)
    - npm (Node Package Manager) or yarn (Optional)
    - Docker (Optional, for running ClickHouse locally)
  steps:
    clone_repo:
      command: |
        git clone https://github.com/your-username/clickhouse-flatfile-ingestion-tool.git
        cd clickhouse-flatfile-ingestion-tool
    backend_setup:
      command: |
        cd server
        npm install
      configuration:
        description: |
          Create a `.env` file in the `server` folder and set the ClickHouse connection details:
        env_variables:
          - CLICKHOUSE_HOST=localhost
          - CLICKHOUSE_PORT=8123
          - CLICKHOUSE_DATABASE=default
          - CLICKHOUSE_USER=default
          - CLICKHOUSE_PASSWORD=your-jwt-token
    frontend_setup:
      command: |
        cd client
        npm install
      configuration:
        description: |
          You can modify any configuration in the frontend as needed in the `client/src/components/ConnectionForm.tsx` file.
    run_backend:
      command: |
        cd server
        npm run dev
      note: The backend will run on `http://localhost:5000`.
    run_frontend:
      command: |
        cd client
        npm start
      note: The frontend will be available on `http://localhost:3000`.

## Usage:
  data_ingestion:
    clickhouse_to_flatfile:
      description: |
        After selecting ClickHouse as the data source, choose a table and select columns to export. Click "Start Ingestion" to download the CSV file.
    flatfile_to_clickhouse:
      description: |
        Select a CSV file and configure the columns to be imported. The backend will ingest the data into ClickHouse.
  jwt_authentication:
    description: |
      The application uses JWT for authentication when accessing the ClickHouse database. Ensure you pass the correct token in the configuration form on the frontend.
  data_preview:
    description: |
      Before ingestion, you can preview the first 100 records by clicking the **Preview** button. This helps ensure the selected columns are correct.

## Testing:
  test_cases:
    single_clickhouse_table_to_flatfile:
      description: Verify count and columns.
    flatfile_to_new_clickhouse_table:
      description: Verify successful ingestion and data integrity.
    multi_table_join_bonus:
      description: |
        Allows joining multiple ClickHouse tables and exporting the result to a Flat File.
    authentication_failures:
      description: |
        Simulate invalid JWT and check error handling.
    data_preview:
      description: Check preview before full ingestion.
  datasets:
    description: |
      You can use official [ClickHouse example datasets](https://clickhouse.com/docs/en/getting-started/example-datasets/) for testing.

## License:
  description: |
    This project is licensed under the MIT License - see the LICENSE file for details.

## Contact:
  - name: Piyush Kumar
  - email: your-email@example.com
  - github_profile: Your GitHub Profile Link
  - linkedin_profile: Your LinkedIn Profile Link

