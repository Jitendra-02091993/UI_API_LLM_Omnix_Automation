import { Page } from '@playwright/test';
import { ContactUsForm } from './contactus-form';

export class IframePage {
    constructor(private page: Page) {}

    get iframe() {
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
    const form = new ContactUsForm(this.iframe);
    await form.submitContactUsForm(data);
  }
}