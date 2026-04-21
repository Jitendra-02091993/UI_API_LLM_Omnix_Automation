import { Page, FrameLocator } from '@playwright/test';
import { ContactUsForm } from './contactus-form';
import { BaseComponents } from './base-components';

export class IframePage extends BaseComponents {
  constructor(page: Page) {
    super(page);
  }

  get iframe(): FrameLocator {
    return this.page.frameLocator('#frame');
  }

  get homeBtn() {
    return this.iframe.getByRole('link', { name: 'Home' });
  }

  get productBtn() {
    return this.iframe.getByRole('link', { name: 'Our Products' });
  }

  get contactUsBtn() {
    return this.iframe.getByRole('link', { name: 'Contact Us' });
  }

  async clickHomeInIframe() {
    await this.homeBtn.click();
  }

  async clickProductsInIframe() {
    await this.productBtn.click();
  }

  async clickContactUsInIframe() {
    await this.contactUsBtn.click();
  }

  async submitContactUsFormInIframe(data: {
    firstName: string;
    lastName: string;
    email: string;
    comments: string;
  }) {
    await this.contactUsBtn.click();

    // ✅ FIX: pass iframe context
    const form = new ContactUsForm(this.iframe);

    await form.submitContactUsForm(data);
  }
}