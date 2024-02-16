# ChatGPT Dynamic UI 💻🤖

[![PR's Welcomes](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)]()
[![GitHub pull requests](https://img.shields.io/github/issues-pr/cdnjs/cdnjs.svg?style=flat)]()

Welcome to the ChatGPT Dynamic UI project. This project seeks community collaboration, and we extend an invitation for you to join and participate with your valuable contributions. Likewise, we are exploring ways to improve and optimize the project, **following the ChatGPT scheme**. Your contributions and ideas are of great importance as we work together on this innovative project.

## Objective 🎯

1. Creating an interface and modular components for an intelligent model to decide when to use components according to needs.

2. Having a highly modular yet flexible UI.

3. Enabling community involvement to improve and enhance the project's efficiency.

## Getting started 🧑🏻‍💻

##### 1. Clone this repository.

```bash
git clone https://github.com/Nuclea-Solutions/chatgpt-dynamic-ui.git
```

##### 2. Open proyect

```bash
cd chatgpt-dynamic-ui
code .
```

##### 3. Set-up OpenAi API

Create a `.env.local` file and configure your environment. To create and copy your API key, visit [API Keys section in OpenAI web portal](https://platform.openai.com/account/api-keys).

```bash
echo "OPENAI_API_KEY=enter-your-apikey" > .env.local
```

##### 4. In the root directory, run the following command:

```bash
# using npm
npm install
# using pnpm
pnpm install
# using bun
bun install
```

##### 5. Run project

```bash
# using npm
npm run dev
# using pnpm
pnpm run dev
# using bun
bun run dev
```

##### 6. Set local MongoDB

1.  Start MongoDB with Docker: set up a local db.

```bash
docker-compose up -d mongo
```

2.  Load initial data
    It will create a local folder to store the local database. Once the folder is created, you don't need to run this script to use the db, just run docker script (unless you want to reset the conversations you added).

```bash
# using npm
npm run db:init
# using pnpm
pnpm run db:init
# using bun
bun run db:init
```

3.  You can visualize and modify the data with mongodb-compass. See installation [here](https://www.mongodb.com/products/tools/compass).

```bash
mongodb-compass
```

## Run Storybook 🚀

- Running Storybook in this project runs the following command.

```bash
# using npm
npm run storybook
# using pnpm
pnpm run storybook
# using bun
bun run storybook
```

- Building Storybook runs the following command.

```bash
# using npm
npm run build-storybook
# using pnpm
pnpm run build-storybook
# using bun
bun run build-storybook
```

#### Project's Storybook link 🔗

https://64d0fe6c6d2314c32ab59491-zeicjrcspl.chromatic.com/

## Technologies Used 💼

- Next js
- React js
- TypeScript
- Node js
- Tailwind css

## Contribution 👨🏻👧🏻🌍

If you want to contribute to this project, follow the steps below:

- Clone the repository.
- Create a new branch: git checkout -b feature/new-feature.
- Make your changes and commit: git commit -m 'Add new functionality.'
- Push your changes: git push origin feature/new-feature.
- Open a pull request.
