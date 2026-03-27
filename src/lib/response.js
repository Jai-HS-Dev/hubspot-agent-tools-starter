export function json(response, status = 200) {
  return new Response(JSON.stringify(response, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}