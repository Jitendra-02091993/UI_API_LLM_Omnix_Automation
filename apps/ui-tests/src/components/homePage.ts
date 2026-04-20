import { Page, BrowserContext } from '@playwright/test';
import { BaseComponents } from './base-components';

export class HomePage extends BaseComponents {
  private _context?: BrowserContext;

  constructor(page: Page) {
    super(page)
  }

  private get context(): BrowserContext {
    if (!this._context) {
      this._context = this.page.context();
    }
    return this._context;
  }

  async navigate() {
    await this.page.goto('/index.html');
  }

  get contactUsBtn() {
    return this.page.getByRole('heading', { name: 'CONTACT US', level: 1 });
  }

  get loginPortalBtn() {
    return this.page.getByRole('heading', { name: 'LOGIN PORTAL', level: 1 });
  }

  get actionPageBtn() {
    return this.page.getByRole('heading', { name: "ACTIONS", level: 1 });
  }

  get iframeBtn (){
    return this.page.getByRole('heading', { name: "IFRAME", level: 1 });
  }

  private async openNewPage(triggerElement: any) {
    const [newPage] = await Promise.all([
      this.context.waitForEvent('page'),
      triggerElement.click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  async openContactUs() {
    return this.openNewPage(this.contactUsBtn);
  }

  async openLoginForm() {
    return this.openNewPage(this.loginPortalBtn);
  }

  async openActionPage() {
    return this.openNewPage(this.actionPageBtn);
  }

  async openIframePage(){
    return this.openNewPage(this.iframeBtn);
  }


}