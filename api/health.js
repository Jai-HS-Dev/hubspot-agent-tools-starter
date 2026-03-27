import { json } from "../src/lib/response.js";

export default async function handler() {
  return json({
    ok: true,
    service: "hubspot-agent-tools-starter",
    status: "ready-for-customization",
    message: "Replace placeholder metadata, auth, and tool logic before production use."
  });
}