<div align="center">

# ⚒️ forge-mcp-server

### Model Context Protocol tools recruiters actually search for in 2026

[![MCP](https://img.shields.io/badge/MCP-tools/list_+_tools/call-4DE8C2?style=for-the-badge)](https://modelcontextprotocol.io/)
[![Node](https://img.shields.io/badge/node-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

Wire Cursor / Claude / any MCP host to Felipe’s **honest** profile facts, quest map, and JD↔stack matcher.

[▶ Play the profile RPG](https://felipeofdev-ai.github.io/) · [Author](https://github.com/felipeofdev-ai)

</div>

## Why this repo

Aug 2026 hiring signal: **MCP + typed tools + agent hosts**.  
This server is a production-shaped teaching kit — JSON-RPC over stdio, Zod-ready schemas, zero fake credentials.

## Tools

| Tool | Purpose |
|------|---------|
| `get_profile` | Public engineering facts |
| `list_quests` | Flagship GitHub quests + recruiter value |
| `match_stack` | Score JD keywords vs inventory |

## Run

```bash
node src/server.js --demo
node --test
# MCP host: point stdio at `node src/server.js`
```

## Example

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"match_stack","arguments":{"keywords":["TypeScript","MCP","RAG"]}}}' | node src/server.js
```

## Author

**Felipe Oliveira Fernandes** — Systems & Agentic AI Engineer  
Fortune‑500 *caliber* shipping (evidence, HITL, no fabricated badges).
