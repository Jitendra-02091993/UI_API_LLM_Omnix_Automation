import { Page} from '@playwright/test';
import { BaseComponents } from './base-components';
import { Messages } from '@org/shared-constants' ;

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
    const alert = await this.handleAlert(Messages.ALERT.message1);
    await this.loginBtn.click();
    await alert.validate();
  }
}
