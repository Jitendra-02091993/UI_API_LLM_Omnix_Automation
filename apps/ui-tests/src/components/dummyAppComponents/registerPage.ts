import { expect, Page } from '@playwright/test';
import { BaseComponents } from '../demoWebComponents/base-components';
import { TestContext } from 'shared-lib/orchestration-lib/TestContext';
import { Logger } from 'shared-lib/utils/logger';

type userData = {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNo: string;
  occupation: string;
  password: string;
  gender: string;
};

export class RegisterPage extends BaseComponents {
  constructor(page: Page, ctx: TestContext) {
    super(page, ctx);
  }

  // ===== Locators =====

  get registerLink() {
    return this.ui.link('Register');
  }

  get firstNameTextBox() {
    return this.ui.textBox('First Name');
  }

  get lastNameTextBox() {
    return this.ui.textBox('Last Name');
  }

  get emailTextBox() {
    return this.ui.textBox('email@example.com');
  }

  get phoneNoTextBox() {
    return this.ui.textBox('enter your number');
  }

  get occupationSelectBox() {
    return this.ui.locator('.custom-select');
  }

  get maleRadioBtn() {
    return this.ui.radio('Male');
  }

  get femaleRadioBtn() {
    return this.ui.radio('Female');
  }

  get passwordTextBox() {
    return this.ui.textBox('Passsword');
  }

  get confirmPasswordTextBox() {
    return this.ui.textBox('Confirm Password');
  }

  get ageCheckBox() {
    return this.ui.checkBox();
  }

  get registerBtn() {
    return this.ui.button('Register');
  }

  get registrationSuccessMsg() {
    return this.ui.heading('Account Created Successfully');
  }

  // ===== Actions =====

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async selectOccupation(occupation: string) {
    await this.occupationSelectBox.waitFor({ state: 'visible' });
    await this.occupationSelectBox.selectOption({ label: occupation });
  }

  async selectGender(gender: string) {
    if (gender.toLowerCase() === 'female') {
      await this.femaleRadioBtn.click();
    } else {
      await this.maleRadioBtn.click();
    }
  }

  /**
   * Uses TestContext as single source of truth
   */
  async completeRegistration() {
    const user = this.ctx.get<userData>('user');

    Logger.step('Filling registration form');

    await this.firstNameTextBox.fill(user.firstName);
    await this.lastNameTextBox.fill(user.lastName);
    await this.emailTextBox.fill(user.emailId);
    await this.phoneNoTextBox.fill(user.phoneNo);
    await this.selectOccupation(user.occupation);
    await this.selectGender(user.gender);
    await this.passwordTextBox.fill(user.password);
    await this.confirmPasswordTextBox.fill(user.password);
    await this.ageCheckBox.check();
    await this.registerBtn.click();
    await expect(this.registrationSuccessMsg).toHaveText(
      'Account Created Successfully'
    );
  }
}