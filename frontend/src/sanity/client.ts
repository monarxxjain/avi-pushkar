import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "58027qfd",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});