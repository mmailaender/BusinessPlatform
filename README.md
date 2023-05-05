Enterprise App development finally made easy.

# Features
## Frontend & Backend | [Nextjs](https://swiy.co/nextjs)

## Env & Secret Manager | [Doppler](https://swiy.co/doppler)
All env & secrets will be managed at one place, and provided to your development environment, Repository (e.g. GitHub) and your hosting platform (e.g. Vercel, Cloudflare Pages...). If one of your team members leaves the team, or you have a secret breach, you can rotate your secrets with one click.

## UI Components | [Reshaped](https://swiy.co/reshaped-docs)
Design library with native **Design Token** support and Figma files for prototyping.

## Database: [Fauna](https://swiy.co/fauna)

## Components: [Bit](https://swiy.co/bit)

## IDE: VS Code with [Gitpod](https://swiy.co/gitpod) 

you can use Gitpod 50 hours per month for free

## GraphQL Client | GQTY
GraphQL Client

## Auth | Clerk

# Getting Started

## Gitpod

Install the Gitpod Plugin
[Chrome](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) |
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/gitpod/)

and create a [Gitpod Account](https://swiy.co/gitpod)

## Doppler

Create a [Doppler Account](https://swiy.co/doppler-login)

Create a [Project and environment](https://swiy.co/doppler-docs). Take the name of the project and the slug from the environment and add it in the [.gitpod.yml](.gitpod.yml#L10)

Set up the Integration
1. Vercel
2. Github

## Clerk

Create a [Clerk Account](https://swiy.io/clerk)

Set the following environment variables in Doppler. You get the values from your [Clerk API Dashboard](https://swiy.io/clerk-set-env-keys).
- PUBLIC_NEXT_CLERK_FRONTEND_API
- CLERK_API_KEY
- CLERK_JWT_KEY

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# TODO

1. Replace [Doppler Setup](.gitpod.yml#L10) with --project \<YourProject> --config \<YourConfig>
2. Replace [npm Bit config](.gitpod.yml#L11) with @\<bit-account-name>
3. i18n