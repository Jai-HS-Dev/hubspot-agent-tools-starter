# Security Policy

This repository is intended to be a public starter.
That means examples should stay generic, sanitized, and safe to clone.

## Public safety rules

- Never commit real access tokens, secrets, or refresh tokens.
- Never commit real customer data.
- Avoid hardcoding live deployment domains unless they are deliberately public examples.
- Use placeholder values in metadata, environment examples, and endpoint URLs.
- Separate OAuth and token lifecycle logic into a dedicated service when the app grows beyond a simple internal prototype.

## Recommended practices

- Keep `.env` local only.
- Use environment variables for all secrets.
- Rotate credentials if anything sensitive is ever exposed.
- Review metadata files before publishing because they often contain URLs and app-level descriptions.
- Treat this repo as a template, not as a production security blueprint.

## Reporting

If you adapt this starter for your own project, document your preferred security contact in your fork or derived repository.