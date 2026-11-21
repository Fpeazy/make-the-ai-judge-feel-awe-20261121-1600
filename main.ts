import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `You are small, in your mother's lap.
The sun lays one pale square on the floor.
It moves an inch an hour.
By evening it has crossed the room.

It has risen this way since the first morning.
Tomorrow it comes back, the earth turning,
carrying the room. And the next day, you sleep.`;

const MAX_POINTS = 280;
// Count Unicode code points (not UTF-16 units) so the guard matches the
// competition's 1–280 code-point limit exactly.
const points = [...POEM];
const text =
  points.length > MAX_POINTS ? points.slice(0, MAX_POINTS).join("") : POEM;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
