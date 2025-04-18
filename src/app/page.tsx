"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ClickHouseConfig,
  getTableSchema,
} from "@/services/clickhouse";
import {
  FlatFileConfig,
  getFlatFileSchema,
} from "@/services/flat-file";
import { ingestData } from "@/services/data-ingestion";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [sourceType, setSourceType] = useState<"clickhouse" | "flatfile">("clickhouse");
  const [clickhouseConfig, setClickhouseConfig] = useState<ClickHouseConfig>({
    host: "",
    port: 9000,
    database: "",
    user: "",
    jwtToken: "",
  });
  const [flatFileConfig, setFlatFileConfig] = useState<FlatFileConfig>({
    fileName: "",
    delimiters: ",",
  });
  const [columnNames, setColumnNames] = useState<string[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [ingestionStatus, setIngestionStatus] = useState<string>("");
  const [recordCount, setRecordCount] = useState<number>(0);
  const { toast } = useToast();
  const [joinCondition, setJoinCondition] = useState<string>("");
  const [ingestionProgress, setIngestionProgress] = useState<number>(0);
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const handleSourceTypeChange = (value: "clickhouse" | "flatfile") => {
    setSourceType(value);
  };

  const handleInputChange = (
    setter: (value: any) => void
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (columnName: string) => {
    setSelectedColumns((prev) =>
      prev.includes(columnName)
        ? prev.filter((col) => col !== columnName)
        : [...prev, columnName]
    );
  };

  const handleLoadColumns = async () => {
    try {
      setIngestionStatus("Loading columns...");
      let schema: { columnNames: string[] };
      if (sourceType === "clickhouse") {
        schema = await getTableSchema(clickhouseConfig, "your_table");
      } else {
        schema = await getFlatFileSchema(flatFileConfig);
      }
      setColumnNames(schema.columnNames);
      setIngestionStatus("Columns loaded successfully.");
    } catch (error: any) {
      setIngestionStatus(`Error loading columns: ${error.message}`);
      toast({
        title: "Error",
        description: `Error loading columns: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handleIngestData = async () => {
    try {
      setIngestionStatus("Ingesting data...");
      setIngestionProgress(0);

      // Simulate ingestion with progress updates
      const totalSteps = 10;
      let currentStep = 0;

      const intervalId = setInterval(() => {
        currentStep++;
        const progress = (currentStep / totalSteps) * 100;
        setIngestionProgress(progress);

        if (currentStep >= totalSteps) {
          clearInterval(intervalId);

          // Perform actual data ingestion here
          ingestData(
            sourceType,
            sourceType === "clickhouse" ? clickhouseConfig : flatFileConfig,
            selectedColumns,
            joinCondition
          ).then((count) => {
            setRecordCount(count);
            setIngestionStatus("Data ingested successfully.");
            toast({
              title: "Success",
              description: `Data ingested successfully. Total records ingested: ${count}`,
            });
          }).catch((error: any) => {
            setIngestionStatus(`Error ingesting data: ${error.message}`);
            toast({
              title: "Error",
              description: `Error ingesting data: ${error.message}`,
              variant: "destructive",
            });
          });
        }
      }, 500);
    } catch (error: any) {
      setIngestionStatus(`Error ingesting data: ${error.message}`);
      toast({
        title: "Error",
        description: `Error ingesting data: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handlePreviewData = async () => {
    // Simulate data preview functionality
    setShowPreview(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">ClickHouse</h1>
      <Card className="w-full max-w-md space-y-4">
        <CardHeader>
          <CardTitle>Source Selection</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue={sourceType} onValueChange={handleSourceTypeChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="clickhouse" id="clickhouse" />
              <Label htmlFor="clickhouse">ClickHouse</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="flatfile" id="flatfile" />
              <Label htmlFor="flatfile">Flat File</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {sourceType === "clickhouse" && (
        <Card className="w-full max-w-md space-y-4">
          <CardHeader>
            <CardTitle>ClickHouse Configuration</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="host">Host</Label>
              <Input id="host" name="host" onChange={handleInputChange(setClickhouseConfig)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="port">Port</Label>
              <Input id="port" name="port" type="number" defaultValue={9000} onChange={handleInputChange(setClickhouseConfig)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="database">Database</Label>
              <Input id="database" name="database" onChange={handleInputChange(setClickhouseConfig)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="user">User</Label>
              <Input id="user" name="user" onChange={handleInputChange(setClickhouseConfig)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jwtToken">JWT Token</Label>
              <Input id="jwtToken" name="jwtToken" type="password" onChange={handleInputChange(setClickhouseConfig)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="joinCondition">Join Condition</Label>
              <Textarea
                id="joinCondition"
                name="joinCondition"
                placeholder="Enter JOIN condition (e.g., table1.id = table2.table1_id)"
                onChange={(e) => setJoinCondition(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {sourceType === "flatfile" && (
        <Card className="w-full max-w-md space-y-4">
          <CardHeader>
            <CardTitle>Flat File Configuration</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fileName">File Name</Label>
              <Input id="fileName" name="fileName" onChange={handleInputChange(setFlatFileConfig)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="delimiters">Delimiters</Label>
              <Input id="delimiters" name="delimiters" defaultValue="," onChange={handleInputChange(setFlatFileConfig)} />
            </div>
          </CardContent>
        </Card>
      )}

      {columnNames.length > 0 && (
        <Card className="w-full max-w-md space-y-4">
          <CardHeader>
            <CardTitle>Column Selection</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {columnNames.map((columnName) => (
              <div key={columnName} className="flex items-center space-x-2">
                <Checkbox
                  id={columnName}
                  checked={selectedColumns.includes(columnName)}
                  onCheckedChange={() => handleCheckboxChange(columnName)}
                />
                <Label htmlFor={columnName}>{columnName}</Label>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-center space-x-4 mt-4">
        <Button onClick={handleLoadColumns}>Load Columns</Button>
        <Button onClick={handlePreviewData} disabled={columnNames.length === 0}>
          Preview Data
        </Button>
        <Button onClick={handleIngestData} disabled={selectedColumns.length === 0}>Ingest Data</Button>
      </div>

      {ingestionStatus && (
        <div className="mt-4 text-center">
          <p>{ingestionStatus}</p>
          {ingestionProgress > 0 && (
            <Progress value={ingestionProgress} className="mt-2" />
          )}
          {recordCount > 0 && <p>Total records ingested: {recordCount}</p>}
        </div>
      )}

      {showPreview && (
        <Card className="w-full max-w-md space-y-4 mt-4">
          <CardHeader>
            <CardTitle>Data Preview (First 100 Records)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Simulated data preview. Implement actual data fetching and display here.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

