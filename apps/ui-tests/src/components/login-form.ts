import { Page, expect } from '@playwright/test';
import { BaseComponents } from './base-components';

export class Loginform extends BaseComponents{
  constructor(page: Page) {
    super(page);
  }

  get usernameBtn() {
    return this.page.getByRole('textbox', { name: 'Username' });
  }

  get passwordBtn() {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  get loginBtn() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  async login(username: string, password: string) {
    this.usernameBtn.fill(username);
    this.passwordBtn.fill(password);
  }

  async handleAlertPopUp() {
    const alert = await this.handleAlert('validation failed');
    await this.loginBtn.click();
    await alert.validate();
  }
}
