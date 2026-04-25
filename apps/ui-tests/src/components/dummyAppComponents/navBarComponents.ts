import { BrowserContext, Page } from '@playwright/test';
import { BaseComponents } from '../demoWebComponents/base-components';
import { TEST_DATA } from '@org/shared-constants';
import { TestContext } from '@org/orchestration-lib';

export class NavbarComponents extends BaseComponents {
  protected _context?: BrowserContext;

  constructor(page: Page, ctx: TestContext) {
    super(page, ctx);
  }

  get practiceApp() {
    return this.ui.link('Practice Apps');
  }

  async navigate(){
    await this.launchURL(TEST_DATA.URL.dummyAppBaseUrl)
  }

  async openPracticeApp(){
      await this.practiceApp.click();
  }


  
  
}
