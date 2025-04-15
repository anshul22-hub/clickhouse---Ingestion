'use server';

import { ClickHouseConfig } from "./clickhouse";
import { FlatFileConfig } from "./flat-file";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function ingestData(
  sourceType: "clickhouse" | "flatfile",
  config: ClickHouseConfig | FlatFileConfig,
  selectedColumns: string[],
  joinCondition?: string
): Promise<number> {
  try {
    // Simulate data ingestion process based on source type
    console.log(`Starting ingestion from ${sourceType}...`);
    console.log("Config:", config);
    console.log("Selected columns:", selectedColumns);
    if (joinCondition) {
      console.log("Join condition:", joinCondition);
    }

    // Simulate some work
    await sleep(2000);

    const ingestedRecords = Math.floor(Math.random() * 2000);
    console.log(`Successfully ingested ${ingestedRecords} records from ${sourceType}.`);

    return ingestedRecords;
  } catch (error: any) {
    console.error(`Error ingesting data from ${sourceType}:`, error);
    throw new Error(`Data ingestion failed: ${error.message}`);
  }
}
