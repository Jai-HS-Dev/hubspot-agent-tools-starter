# HubSpot Agent Tools Starter

A public starter repository for building HubSpot agent tools that non-developers, vibe coders, and developers can all adapt.

This repo is intentionally general.
It is designed to help someone clone a starter, connect their own hosting and auth approach, and begin building custom tools for HubSpot agents.

## Who this is for

- non-developers who want a guided place to start
- vibe coders using tools like Codex, Claude Code, Cursor, Windsurf, or similar agents
- developers who want a clean, public-safe template

## What this repo gives you

This starter includes:
- a minimal HubSpot project structure
- example workflow-action metadata files
- placeholder API endpoints for agent tools
- generic helper utilities
- documentation written for both humans and AI coding tools

This is not a finished product.
It is a starting point you are expected to customize.

## What kinds of tools can you build here?

Typical examples include:
- search a contact or company
- summarize a CRM record
- classify a lead or deal stage
- draft an email or meeting follow-up
- enrich a record with data from another service
- call an internal API and return a result to HubSpot

## Hosting options

You can host the `/api/*` endpoints anywhere that supports HTTPS requests.

Common choices:
- Vercel
- Netlify Functions
- Render
- Railway
- AWS Lambda / API Gateway
- Cloudflare Workers
- your own Node server

Vercel is a common option, but it is not required.
You should choose the platform that fits your team, budget, and comfort level.

## Authentication options

There are two common patterns:
- use a private app token for internal prototypes or single-account tools
- use OAuth 2.0 for multi-account or production-style installs

If you want a dedicated OAuth service, use the companion public starter:
- https://github.com/Jai-HS-Dev/hubspot-oauth-service-starter

Keeping auth in a separate repo is often cleaner and safer.

## Quick start

### 1. Install prerequisites

- Node.js 20 or later
- HubSpot CLI
- a deployment tool of your choice

Example installs:

```bash
npm install -g @hubspot/cli
npm install -g vercel
```

### 2. Clone and install

```bash
git clone https://github.com/Jai-HS-Dev/hubspot-agent-tools-starter.git
cd hubspot-agent-tools-starter
npm install
```

### 3. Create your local environment file

```bash
cp .env.example .env
```

Fill in only the values you actually use.
Keep `.env` local.

### 4. Choose your deployment base URL

Replace the placeholder domain in:
- `src/app/app-hsmeta.json`
- `src/app/workflow-actions/*-hsmeta.json`

Example:
- from `https://your-deployment-domain.example.com`
- to `https://my-agent-tools.example.com`

### 5. Authenticate and upload the HubSpot project

```bash
hs account auth
hs project upload
```

### 6. Deploy your endpoints

Vercel example:

```bash
vercel --prod
```

### 7. Smoke test your deployment

```bash
SMOKE_BASE_URL=https://your-deployment-domain.example.com npm run smoke:deployed
```

PowerShell example:

```powershell
$env:SMOKE_BASE_URL='https://your-deployment-domain.example.com'
npm run smoke:deployed
```

## How to customize

Start here:
- `src/app/app-hsmeta.json` for app metadata and permitted URLs
- `src/app/workflow-actions/*-hsmeta.json` for HubSpot tool definitions
- `api/tools/*.js` for endpoint logic
- `src/lib/*.js` for shared helpers
- `scripts/smoke-deployed.js` for lightweight endpoint verification

Recommended flow:
1. Pick your hosting platform.
2. Pick your auth strategy.
3. Replace the placeholder base URL in the metadata files.
4. Deploy the API endpoints.
5. Upload the HubSpot project.
6. Test one tool at a time.
7. Refine the output format for your team.

## For AI coding tools

If you use Codex, Claude Code, Cursor, Windsurf, or another coding agent:
- read `AGENTS.md` first
- keep secrets out of prompts
- make small explicit changes
- update endpoint URLs and HubSpot metadata together
- prefer placeholders over hardcoded production values
- treat this starter as a foundation, not a locked framework

## Security basics

- Never commit real tokens, secrets, or customer data.
- Do not hardcode live deployment domains unless they are intentionally public.
- Keep auth logic separate if the project becomes multi-account or production-facing.
- Prefer environment variables over inline secrets.
- Replace placeholder values before going live.

See `SECURITY.md` for more.

## Project layout

```text
api/tools/                   # Example endpoint handlers for HubSpot tools
scripts/smoke-deployed.js    # Lightweight deployment smoke test
src/app/app-hsmeta.json      # HubSpot app metadata
src/app/workflow-actions/    # Example workflow-action metadata
src/lib/                     # Shared helpers and placeholder service utilities
.github/workflows/           # Optional CI and safety checks
```

## Public starter checklist

Before publishing your own version, replace:
- project name
- descriptions
- placeholder domain
- auth pattern notes
- tool set and prompts
- branding and ownership details

## Community files`r`n`r`n- `CONTRIBUTING.md` for contribution guidance`r`n- `SUPPORT.md` for public support guidance`r`n- `SECURITY.md` for private vulnerability reporting guidance`r`n- `CODE_OF_CONDUCT.md` for community expectations`r`n`r`n## Public repo note`r`n`r`nThis repository is provided as a public starter under the MIT License.`r`nIt is offered as-is, without warranty, and you are responsible for reviewing your own deployment, data handling, and security decisions.`r`n`r`n## License`r`n`r`nMIT