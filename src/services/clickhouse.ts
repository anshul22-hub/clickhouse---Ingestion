/**
 * Represents ClickHouse connection parameters.
 */
export interface ClickHouseConfig {
  /**
   * The host of the ClickHouse server.
   */
  host: string;
  /**
   * The port of the ClickHouse server.
   */
  port: number;
  /**
   * The database to connect to.
   */
  database: string;
  /**
   * The user for authentication.
   */
  user: string;
  /**
   * The JWT token for authentication.
   */
  jwtToken: string;
}

/**
 * Represents a table schema with column names.
 */
export interface TableSchema {
  /**
   * The name of the table.
   */
  tableName: string;
  /**
   * An array of column names in the table.
   */
  columnNames: string[];
}

/**
 * Asynchronously retrieves the table schema from ClickHouse.
 *
 * @param config The ClickHouse connection configuration.
 * @param tableName The name of the table to retrieve the schema for.
 * @returns A promise that resolves to a TableSchema object containing the table name and column names.
 */
export async function getTableSchema(config: ClickHouseConfig, tableName: string): Promise<TableSchema> {
  // TODO: Implement this by calling the ClickHouse API.

  return {
    tableName: tableName,
    columnNames: ['id', 'name', 'value'],
  };
}
