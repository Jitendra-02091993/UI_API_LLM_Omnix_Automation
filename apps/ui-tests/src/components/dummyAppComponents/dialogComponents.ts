import { BaseComponents } from '../demoWebComponents/base-components';
import { Page } from '@playwright/test';
import { Logger } from '@org/shared-constants';

type DialogData = {
  fullName: string;
  email: string;
};

export class DialogComponents extends BaseComponents {
  constructor(page: Page) {
    super(page);
  }

  get dialog() {
    return this.ui.getByRole('dialog');
  }

  get firstNameInput() {
    return this.ui.inputByPlaceholder('Enter your full name');
  }

  get emailInput() {
    return this.ui.inputByPlaceholder('Enter your email address');
  }

  get verifyBtn() {
    return this.ui.button('Verify & Continue');
  }

  async fillDialogForm(data: DialogData) {
    await this.dialog.waitFor({ state: 'visible' });
    await this.firstNameInput.fill(data.fullName);
    await this.emailInput.fill(data.email);
  }

  async submitDialog() {
    await this.verifyBtn.click();
  }

  async fillDialogIfVisible(data: DialogData) {
    if (await this.dialog.isVisible()) {
      Logger.step('Dialog is visible');
      await this.fillDialogForm(data);
    } else {
      Logger.info('Dialog is not visible');
    }
  }
}
