import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `You are small, in your mother's arms.
She sings her mother's song,
verse by verse, back to the first lullaby.

The moon climbs an inch an hour.
It has done this since the first night.
Tomorrow it comes back, the earth turning,
carrying you through the whole dark. You sleep.`;

const MAX_POINTS = 280;
// Count Unicode code points (not UTF-16 units) so the guard matches the
// competition's 1–280 code-point limit exactly.
const points = [...POEM];
const text =
  points.length > MAX_POINTS ? points.slice(0, MAX_POINTS).join("") : POEM;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
