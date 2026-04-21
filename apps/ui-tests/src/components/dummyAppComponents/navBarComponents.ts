import { BrowserContext, Page } from '@playwright/test';
import { BaseComponents } from '../demoWebComponents/base-components';
import { TEST_DATA } from '@org/shared-constants';

export class NavbarComponents extends BaseComponents {
  private _context?: BrowserContext;

  constructor(page: Page) {
    super(page);
  }

  private get context(): BrowserContext {
    if (!this.context) {
      this._context = this.page.context();
    }
    return this._context!;
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

  private async openNewPage(triggerElement: any) {
    const [newPage] = await Promise.all([
      this.context.waitForEvent('page'),
      triggerElement.click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  
  
}
