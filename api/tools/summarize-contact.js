import { json } from "../../src/lib/response.js";
import { summarizeContact } from "../../src/lib/hubspot-agent-tools.js";

export default async function handler(request) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405);
  }

  const body = await request.json().catch(() => ({}));
  const result = await summarizeContact(body);
  return json(result);
}