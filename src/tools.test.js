import test from "node:test";
import assert from "node:assert/strict";
import { handleTool, matchStack } from "./server.js";

test("profile tool returns public facts", () => {
  const p = handleTool("get_profile");
  assert.equal(p.email, "felipe.of.dev@gmail.com");
  assert.ok(p.github.includes("felipeofdev-ai"));
});

test("stack match scores MCP+TS jobs highly", () => {
  const r = matchStack(["TypeScript", "MCP", "LangGraph", "PostgreSQL"]);
  assert.ok(r.score >= 50);
  assert.ok(r.hits.includes("typescript"));
});
