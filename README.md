# Url scanner build with Nuxt and Power by Virustotal API

## Setup our Virustotal API key

- Go to [Virustotal](https://www.virustotal.com/)
- Create an account and go to API Key and copy it.
- Create a .env file in the route of of the app and enter this content:

```
NUXT_VIRUSTOTAL_API_KEY=<your api key>
NUXT_PUBLIC_BASE_URL=https://www.virustotal.com/api/v3

```

## How this app works

You can check if an site is potentially malicious.

- Just enter the url you want to check and click on the scan button.
- You will be taken to a results page where you can see any issue, if there are any.
- If you just want to test the app you can click one of the example url buttons, to see what results you would get.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
