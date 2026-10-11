## PLAYWRIGHT AUTOMATION PROJECT FOR https://www.automationexercise.com/ ##

End-to-end browser automation framework built with Playwright and TypeScript for Automation Exercise website.

This project demonstrates reusable page objects, end-to-end test journeys, smoke and regression test selection, environment-based configuration, exception-scenario simulation, and CI automation using GitHub Actions.

## TECH STACK

- Playwright
- TypeScript
- Node.js
- dotenv
- GitHub Actions
- Playwright HTML Reporter

## FOLDER STRUCTURE:

    automation-playwright/
    ├── .github/
    │   └── workflows/
    │       └── playwright.yml
    ├── config/
    │   └── envConfig.ts
    ├── data/
    │   └──                  # Test data
    ├── pages/
    │   └──                  # Reusable page objects
    ├── tests/
    │   └──                  # Test journeys and scenarios
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── playwright.config.ts
    ├── tsconfig.json
    └── README.md

- pages/ — Encapsulates page locators and reusable UI interactions.
- tests/ — Contains end-to-end journeys and exception scenarios.
- config/ — Centralizes environment configuration and credentials.
- data/ — Holds reusable test data.
- .github/workflows/ — Defines automated CI execution.
- playwright.config.ts — Configures test discovery, browser settings, retries, timeouts, and reporting

## Automated Scenarios
1. Happy path: Cart persistence
2. Exception scenario: Product becomes unavailable

## Installation:
Clone the repository:

git clone https://github.com/pragashm/automation-playwright.git
cd automation-playwright
- Install dependencies:

npm ci
Install the Chromium browser and its required dependencies:

npx playwright install --with-deps chromium

Configure the variables:

- BASE_URL=https://www.automationexercise.com/
- USERNAME=your-test-account-email
- PASSWORD=your-test-account-password

## Running Tests
The following npm scripts are defined in package.json.

- npm test	#Run the complete test suite
- npm run smoke	#Run tests tagged with @smoke
- npm run regression	#Run tests tagged with @regression

## CI SETUP AND TRIGGERING PIPELINE RUN

The workflow is defined in:
.github/workflows/playwright.yml

- For Push, Pull requests - CI will trigger smoke tests automatically
- Scheduled - Everyday 10 AM IST
- Check CI results - https://github.com/pragashm/automation-playwright/actions

## What’s not included for now:
-	UI/API Folder Segregation
-	When more tests are added, they need to be independent. Ex Storage State
-	Fixtures for re-usability
-	BeforeEach/beforeAll blocks for pre-requisites
-	Git Branching and PR reviews – Only main branch for now
-	Custom html reporting
-	Utilities folder to include helpers like csv parsing, randomNumber methods
-	Multi browser, devices testing
-	Lint checks


Author
Pragash M.