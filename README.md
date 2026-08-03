> **Live demo:** https://felipeofdev-ai.github.io/labs/forge-mcp-server/

<div align="center">

# âš’ï¸ forge-mcp-server

### Model Context Protocol tools recruiters actually search for in 2026

[![MCP](https://img.shields.io/badge/MCP-tools/list_+_tools/call-4DE8C2?style=for-the-badge)](https://modelcontextprotocol.io/)
[![Node](https://img.shields.io/badge/node-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

Wire Cursor / Claude / any MCP host to Felipeâ€™s **honest** profile facts, quest map, and JDâ†”stack matcher.

[â–¶ Play the profile RPG](https://felipeofdev-ai.github.io/) Â· [Author](https://github.com/felipeofdev-ai)

</div>

## Why this repo

Aug 2026 hiring signal: **MCP + typed tools + agent hosts**.  
This server is a production-shaped teaching kit â€” JSON-RPC over stdio, Zod-ready schemas, zero fake credentials.

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

**Felipe Oliveira Fernandes** â€” Systems & Agentic AI Engineer  
Fortuneâ€‘500 *caliber* shipping (evidence, HITL, no fabricated badges).

---

## Live demo

**Try it in the browser (no clone):** see badge / homepage above, or the [Labs hub](https://felipeofdev-ai.github.io/labs/).

## Constellation

| Project | Demo |
|---------|------|
| [CardOpsAI](https://github.com/felipeofdev-ai/CardOpsAI) | [lab](https://felipeofdev-ai.github.io/labs/cardopsai/) |
| [BridgeTrace-AI](https://github.com/felipeofdev-ai/BridgeTrace-AI) | [lab](https://felipeofdev-ai.github.io/labs/bridgetrace/) |
| [Meridian](https://github.com/felipeofdev-ai/Meridian) | [lab](https://felipeofdev-ai.github.io/labs/meridian/) |
| [TrustHire](https://github.com/felipeofdev-ai/trusthire) | [lab](https://felipeofdev-ai.github.io/labs/trusthire/) |
| [secure-ship-kit](https://github.com/felipeofdev-ai/secure-ship-kit) | [lab](https://felipeofdev-ai.github.io/labs/secure-ship-kit/) |
| [agentic-rag-cite](https://github.com/felipeofdev-ai/agentic-rag-cite) | [lab](https://felipeofdev-ai.github.io/labs/agentic-rag-cite/) |
| [hitl-langgraph-kit](https://github.com/felipeofdev-ai/hitl-langgraph-kit) | [lab](https://felipeofdev-ai.github.io/labs/hitl-langgraph-kit/) |
| [forge-mcp-server](https://github.com/felipeofdev-ai/forge-mcp-server) | [lab](https://felipeofdev-ai.github.io/labs/forge-mcp-server/) |
| [agent-eval-harness](https://github.com/felipeofdev-ai/agent-eval-harness) | [lab](https://felipeofdev-ai.github.io/labs/agent-eval-harness/) |
| [lgpd-checklist-agent](https://github.com/felipeofdev-ai/lgpd-checklist-agent) | [lab](https://felipeofdev-ai.github.io/labs/lgpd-checklist-agent/) |
| [hiring-packet](https://github.com/felipeofdev-ai/hiring-packet) | [lab](https://felipeofdev-ai.github.io/labs/hiring-packet/) |
| [philo-ai-os](https://github.com/felipeofdev-ai/philo-ai-os) | [lab](https://felipeofdev-ai.github.io/labs/philo-ai-os/) |
| [balcaoia-local](https://github.com/felipeofdev-ai/balcaoia-local) | [studio](https://balcaoia-studio.vercel.app) |

Portfolio: [felipeofdev-ai.github.io](https://felipeofdev-ai.github.io/) · Author: Felipe Fernandes · `felipe.of.dev@gmail.com`

> If this helped you, **star this repo** — organic only. No bots, no paid stars.