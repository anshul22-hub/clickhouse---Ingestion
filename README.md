
---
# Bidirectional ClickHouse & Flat File Data Ingestion Tool

## 📋 **Project Overview**
This project is a web-based application that facilitates bidirectional data ingestion between a ClickHouse database and Flat Files (CSV). The application supports:
- **ClickHouse to Flat File** and **Flat File to ClickHouse** data flow.
- JWT token-based authentication for ClickHouse.
- Column selection for both source and destination.
- Ingestion progress reporting with a user-friendly UI.
- Error handling and successful record count reporting.

## 🔧 **Technologies Used**
- **Backend**: TypeScript with Next.js
- **Frontend**: React, HTML, CSS
- **Database**: ClickHouse
- **Client Libraries**: ClickHouse client compatible with TypeScript (e.g., `clickhouse-client`)
- **Other**: CSV file parsing, JWT authentication, Batching/Streaming for data transfer

## 🛠 **Installation & Setup**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   cd repository-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables** (for ClickHouse connection and JWT token):
   Create a `.env` file in the root of the project:
   ```env
   CLICKHOUSE_HOST=your-clickhouse-host
   CLICKHOUSE_PORT=your-clickhouse-port
   CLICKHOUSE_DB=your-clickhouse-db
   CLICKHOUSE_USER=your-clickhouse-user
   CLICKHOUSE_JWT_TOKEN=your-jwt-token
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## ⚙️ **Features**
- **Bidirectional Ingestion**: Transfer data from ClickHouse to Flat File and vice versa.
- **Column Selection**: Dynamically select columns for data ingestion.
- **Error Handling**: User-friendly error messages for connection/authentication issues.
- **Progress Bar**: Real-time progress bar during data ingestion.
- **JWT Authentication**: Secure interaction with ClickHouse using JWT tokens.

## ✅ **Testing**
- Use example ClickHouse datasets like `uk_price_paid` and `ontime` for testing ingestion functionality.
- Ensure proper error handling by simulating connection and authentication failures.



