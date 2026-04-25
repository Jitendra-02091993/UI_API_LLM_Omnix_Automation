commands 
npm nx ui-tests --grep "@tags"
npm nx api-tests --grep "@tags"
```
ui-api-llm-automation
├─ .env
├─ .nx
│  └─ workspace-data
│     ├─ 4C325950-51A9-51EC-AF9B-9DD9C171DD62.db
│     ├─ 4C325950-51A9-51EC-AF9B-9DD9C171DD62.db-shm
│     ├─ 4C325950-51A9-51EC-AF9B-9DD9C171DD62.db-wal
│     ├─ 4C325950-51A9-51EC-AF9B-9DD9C171DD62.lock
│     ├─ d
│     │  ├─ daemon.log
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ apps
│  ├─ api-tests
│  │  ├─ eslint.config.mjs
│  │  ├─ project.json
│  │  ├─ src
│  │  │  ├─ assets
│  │  │  └─ main.ts
│  │  ├─ tsconfig.app.json
│  │  └─ tsconfig.json
│  └─ ui-tests
│     ├─ eslint.config.mjs
│     ├─ package.json
│     ├─ playwright-report
│     │  └─ index.html
│     ├─ playwright.config.ts
│     ├─ project.json
│     ├─ src
│     │  ├─ components
│     │  │  ├─ demoWebComponents
│     │  │  │  ├─ actionPage.ts
│     │  │  │  ├─ base-components.ts
│     │  │  │  ├─ contactus-form.ts
│     │  │  │  ├─ homePage.ts
│     │  │  │  ├─ iframePage.ts
│     │  │  │  └─ login-form.ts
│     │  │  └─ dummyAppComponents
│     │  │     ├─ dialogComponents.ts
│     │  │     ├─ loginPage.ts
│     │  │     ├─ navBarComponents.ts
│     │  │     ├─ practiceAppPage.ts
│     │  │     └─ registerPage.ts
│     │  ├─ e2e
│     │  │  ├─ demoApp
│     │  │  │  └─ demo.spec.ts
│     │  │  └─ dummyWeb
│     │  │     └─ practiceApp.spec.ts
│     │  ├─ fixtures
│     │  │  └─ test-fixtures.ts
│     │  └─ ui-wrapper.ts
│     ├─ test-results
│     │  └─ .last-run.json
│     └─ tsconfig.json
├─ eslint.config.mjs
├─ nx.json
├─ package.json
├─ playwright-report
│  ├─ data
│  └─ index.html
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ shared-lib
│  ├─ eslint.config.mjs
│  ├─ orchestration-lib
│  │  ├─ TestContext.ts
│  │  ├─ index.ts
│  │  └─ page-factory.ts
│  ├─ package.json
│  ├─ src
│  │  ├─ index.ts
│  │  └─ lib
│  │     ├─ messages.ts
│  │     └─ test-data.ts
│  ├─ tsconfig.json
│  ├─ tsconfig.lib.json
│  └─ utils
│     ├─ helpers.ts
│     ├─ index.ts
│     ├─ logger.ts
│     └─ test-data-faker.ts
├─ test-results
│  └─ .last-run.json
├─ tsconfig.base.json
└─ tsconfig.json

```