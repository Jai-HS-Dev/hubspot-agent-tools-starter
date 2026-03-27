import { json } from "../../src/lib/response.js";
import { searchCrmRecords } from "../../src/lib/hubspot-agent-tools.js";

export default async function handler(request) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405);
  }

  const body = await request.json().catch(() => ({}));
  const result = await searchCrmRecords(body);
  return json(result);
}