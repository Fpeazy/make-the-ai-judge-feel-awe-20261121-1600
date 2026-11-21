import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `The Keeper's Ledger

Salt on the brass hinge.
The beam turns, slow and heavy,
counting nameless waves.

The logbook holds a hundred tides.
Tomorrow's tide, already written.
The sea writes it. The sea erases it.
A thousand tides hence,
the sea is still writing.`;

const MAX_POINTS = 280;
// Count Unicode code points (not UTF-16 units) so the guard matches the
// competition's 1–280 code-point limit exactly.
const points = [...POEM];
const text =
  points.length > MAX_POINTS ? points.slice(0, MAX_POINTS).join("") : POEM;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
