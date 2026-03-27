export async function searchCrmRecords({ objectType = "contacts", query = "" } = {}) {
  return {
    ok: true,
    objectType,
    query,
    note: "Starter placeholder. Replace this with your real HubSpot CRM search logic.",
    items: []
  };
}

export async function summarizeContact({ email = "", contactId = "" } = {}) {
  return {
    ok: true,
    email,
    contactId,
    summary: "Starter placeholder. Replace this with your real contact summary logic.",
    insights: [
      "Define what data your summary should evaluate.",
      "Document how you score or prioritize engagement.",
      "Keep outputs easy for humans and AI agents to read."
    ]
  };
}