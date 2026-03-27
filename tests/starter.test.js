import test from "node:test";
import assert from "node:assert/strict";

test("starter metadata uses placeholder domain", async () => {
  const module = await import("../src/app/app-hsmeta.json", { with: { type: "json" } });
  assert.equal(module.default.allowedUrls[0], "https://your-deployment-domain.example.com");
});