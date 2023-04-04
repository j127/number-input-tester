# Parcel Landing Page Example

Features:

- Use TypeScript or JavaScript
- Use SCSS or CSS
- Quickly include Google Fonts
- Runs tasks on staged files automatically (formatting, etc.)
- Optionally deploy to a staging environment
- Deploys production build to Netlify (free)

See the `package.json` file for a list of available scripts.

First, install `yarn` if you don't have it:

```text
npm i -g yarn
```

Then install dependencies and run the local server at `http://localhost:1234`:

```text
yarn
yarn start
```

When ready to deploy, get your Netlify credentials ready and run these commands once:

```text
yarn netlify:login
yarn netlify:link
```

You won't have to run those again. To deploy after that, run this command:

```text
yarn deploy
```

[Live demo](https://parcel-landing-page.netlify.app/)
