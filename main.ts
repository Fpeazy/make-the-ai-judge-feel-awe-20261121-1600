import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `The Sun's Square

The sun lays one pale square on the floor.
It moves an inch an hour.
By noon it rests halfway across the room.

By evening it has crossed the room and climbed the wall.
Tomorrow it comes back.
And the next day. And the next.`;

const MAX_POINTS = 280;
// Count Unicode code points (not UTF-16 units) so the guard matches the
// competition's 1–280 code-point limit exactly.
const points = [...POEM];
const text =
  points.length > MAX_POINTS ? points.slice(0, MAX_POINTS).join("") : POEM;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
