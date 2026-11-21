import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `The Kitchen Floor

You are small, in your mother's lap.
The sun lays a square on the floor.
It moves an inch an hour.
By evening it crossed the room.
It has risen since the first morning.
Tomorrow it comes back, the earth turning
carrying the room. And the next day. And the next.`;

const MAX_POINTS = 280;
// Count Unicode code points (not UTF-16 units) so the guard matches the
// competition's 1–280 code-point limit exactly.
const points = [...POEM];
const text =
  points.length > MAX_POINTS ? points.slice(0, MAX_POINTS).join("") : POEM;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
