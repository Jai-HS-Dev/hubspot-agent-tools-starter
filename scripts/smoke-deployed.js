const baseUrl = process.env.SMOKE_BASE_URL;

if (!baseUrl) {
  console.error("Missing SMOKE_BASE_URL. Example: https://your-deployment-domain.example.com");
  process.exit(1);
}

const targets = [
  "/api/health",
  "/api/tools/search-crm-records",
  "/api/tools/summarize-contact"
];

for (const target of targets) {
  const url = new URL(target, baseUrl).toString();
  const response = await fetch(url, {
    method: target === "/api/health" ? "GET" : "POST",
    headers: { "content-type": "application/json" },
    body: target === "/api/health" ? undefined : JSON.stringify({})
  });

  console.log(`${response.status} ${url}`);
}