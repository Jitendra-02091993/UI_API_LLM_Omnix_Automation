
import { Page } from '@playwright/test';
import { TestContext } from '../../../../shared-lib/orchestration-lib/TestContext';
import { RegisterPage } from '../components/dummyAppComponents/registerPage';
import { LoginPage } from '../components/dummyAppComponents/loginPage';

export function registerPages(page: Page, ctx: TestContext) {
  ctx.pages.register = new RegisterPage(page, ctx);
  ctx.pages.login = new LoginPage(page, ctx);
}