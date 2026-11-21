import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `You are small, in her arms.
She sings her mother's song,
breath by breath, back to the first lullaby.

The moon climbs an inch an hour.
Tomorrow it comes back, the earth turning,
carrying you through the whole dark.
She does not put you down.
You sleep, and the song goes on.`;

const MAX_POINTS = 280;
// Count Unicode code points (not UTF-16 units) so the guard matches the
// competition's 1–280 code-point limit exactly.
const points = [...POEM];
const text =
  points.length > MAX_POINTS ? points.slice(0, MAX_POINTS).join("") : POEM;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
