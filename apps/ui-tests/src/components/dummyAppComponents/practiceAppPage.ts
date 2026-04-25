import {  Page , Locator} from '@playwright/test';
import { BaseComponents } from '../demoWebComponents/base-components';
import { NavbarComponents } from './navBarComponents';
import { TestContext } from 'shared-lib/orchestration-lib/TestContext';

export class PracticeAppPage extends BaseComponents {

  constructor(page: Page, ctx: TestContext) {
    super(page, ctx);
  }

  get listOfApps() {
    return this.ui.locator('#practice-apps>div:last-child>div');
  }

  get listOfStartPracticingBtn() {
    return this.page.locator('button').filter({ hasText: 'Start Practicing' });
  }

  get LoginHeader() {
    return this.ui.heading('Log in');
  }

 /**
   * Opens a new tab/page triggered by clicking an element
   * Why Promise.all?
   * - Ensures we start listening BEFORE click happens
   * - Prevents race condition (very common bug)
   */
  private async openNewPage(triggerElement: Locator): Promise<Page> {
    await triggerElement.waitFor({ state: 'visible' }); // ensure element is interactable

    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      triggerElement.click(),
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }

  async openLoginPage(): Promise<Page> {
    const button = this.listOfStartPracticingBtn.first();

    // Debug safety: ensures element actually exists
    if (await button.count() === 0) {
      throw new Error('No "Start Practicing" button found');
    }

    return this.openNewPage(button);
  }

  async navigate(navBar: NavbarComponents) {
    await navBar.openPracticeApp();
  }

  async getListOfAllApps() {
    return this.listOfApps;
  }

  async getListOfStartPracticingBtn() {
    return this.listOfStartPracticingBtn;
  }

  async loginHeader() {
    return this.LoginHeader;
  }

  getContext() {
  return this.context;
}
}
