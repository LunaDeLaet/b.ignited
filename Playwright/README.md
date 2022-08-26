# Playwright

## How to install Playwright

https://playwright.dev/docs/intro 

### npm:

1. npm init playwright@latest
2. Choose between TypeScript or JavaScript (default is TypeScript)
3. Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
4. Add a GitHub Actions workflow to easily run tests on CI

### VS Code
1. Install the VS Code extension from the marketplace
2. open the command panel (Ctrl+Shift+P) and type:
Install Playwright
3. Select "Test: Install Playwright" and Choose the browsers you would like to run your tests on. You can also choose if you would like to have a GitHub Actions setup to run your tests on CI.

## How to run test:

### npx
1. npx playwright test
2. npx playwright show-report

### VS Code
1. Got to your test file
2. Click the green triangle next to your test block. Playwright will run through each line of the test and when it finishes you will see a green tick next to your test block as well as the time it took to run the test
3. Or run all tests by clicking on the white triangle as you hover over the tests in the testing sidebar.

