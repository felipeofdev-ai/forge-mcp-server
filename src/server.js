/**
 * Forge MCP Server — stdio-shaped JSON-RPC tools for agent hosts (Cursor/Claude).
 * Demonstrates Model Context Protocol patterns recruiters seek in 2026.
 * No fabricated employment. Facts mirrored from public profile.
 */

export const PROFILE = {
  name: "Felipe Oliveira Fernandes",
  class: "Systems & Agentic AI Engineer",
  email: "felipe.of.dev@gmail.com",
  location: "São José dos Campos, SP · Remote",
  github: "https://github.com/felipeofdev-ai",
  linkedin:
    "https://www.linkedin.com/in/felipe-de-oliveira-fernandes-941763110/",
  portfolio: "https://felipeofdev-ai.github.io/",
  years: "4+",
  highlight:
    "Ships production multi-tenant SaaS + agentic systems with HITL safety.",
};

export const QUESTS = [
  {
    id: "trusthire",
    title: "TrustHire",
    url: "https://github.com/felipeofdev-ai/trusthire",
    whyRecruiterCares: "Fraud detection SaaS, FastAPI, explainable risk scores",
  },
  {
    id: "balcaoia",
    title: "BalcãoIA Local",
    url: "https://github.com/felipeofdev-ai/balcaoia-local",
    whyRecruiterCares: "Next.js AI studio, compliance-first local commerce",
  },
  {
    id: "bridgetrace",
    title: "BridgeTrace-AI",
    url: "https://github.com/felipeofdev-ai/BridgeTrace-AI",
    whyRecruiterCares: "Graph + GenAI financial traceability",
  },
  {
    id: "rag",
    title: "agentic-rag-cite",
    url: "https://github.com/felipeofdev-ai/agentic-rag-cite",
    whyRecruiterCares: "Citation-mandatory RAG — enterprise answerability",
  },
  {
    id: "hitl",
    title: "hitl-langgraph-kit",
    url: "https://github.com/felipeofdev-ai/hitl-langgraph-kit",
    whyRecruiterCares: "interrupt() / human-in-the-loop agent patterns",
  },
];

export const TOOLS = [
  {
    name: "get_profile",
    description: "Return Felipe's public engineering profile facts",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_quests",
    description: "List flagship GitHub quests with recruiter value props",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "match_stack",
    description: "Score how well a JD stack overlaps Felipe's inventory",
    inputSchema: {
      type: "object",
      properties: {
        keywords: {
          type: "array",
          items: { type: "string" },
          description: "JD tech keywords",
        },
      },
      required: ["keywords"],
    },
  },
];

const INVENTORY = [
  "typescript",
  "react",
  "next.js",
  "node.js",
  "python",
  "fastapi",
  "postgresql",
  "neo4j",
  "docker",
  "aws",
  "langchain",
  "langgraph",
  "mcp",
  "rag",
  "trpc",
  "zod",
];

export function matchStack(keywords = []) {
  const norm = keywords.map((k) => String(k).toLowerCase());
  const hits = INVENTORY.filter((s) =>
    norm.some((k) => k.includes(s) || s.includes(k)),
  );
  const score = Math.min(100, Math.round((hits.length / Math.max(norm.length, 1)) * 100));
  return { score, hits, inventory: INVENTORY };
}

export function handleTool(name, args = {}) {
  if (name === "get_profile") return PROFILE;
  if (name === "list_quests") return QUESTS;
  if (name === "match_stack") return matchStack(args.keywords || []);
  return { error: `Unknown tool: ${name}` };
}

/** Minimal MCP-ish JSON-RPC loop over stdin/stdout */
export async function serveStdio(stdin = process.stdin, stdout = process.stdout) {
  stdin.setEncoding("utf8");
  let buf = "";
  stdin.on("data", (chunk) => {
    buf += chunk;
    let idx;
    while ((idx = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      let msg;
      try {
        msg = JSON.parse(line);
      } catch {
        continue;
      }
      const { id, method, params } = msg;
      let result;
      if (method === "tools/list") result = { tools: TOOLS };
      else if (method === "tools/call") {
        result = {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                handleTool(params?.name, params?.arguments || {}),
                null,
                2,
              ),
            },
          ],
        };
      } else if (method === "initialize") {
        result = {
          protocolVersion: "2025-03-26",
          serverInfo: { name: "forge-mcp-server", version: "1.0.0" },
          capabilities: { tools: {} },
        };
      } else result = { error: `Unsupported method ${method}` };
      stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
    }
  });
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}` || process.argv[1]?.endsWith("server.js")) {
  // CLI demo when run directly
  if (process.argv.includes("--demo")) {
    console.log(JSON.stringify(handleTool("get_profile"), null, 2));
    console.log(JSON.stringify(handleTool("match_stack", { keywords: ["TypeScript", "MCP", "RAG"] }), null, 2));
  } else {
    console.error("forge-mcp-server listening on stdio (send JSON-RPC lines)");
    serveStdio();
  }
}
