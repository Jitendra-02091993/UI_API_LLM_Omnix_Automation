import { expect, Page, FrameLocator } from '@playwright/test';
import { Messages } from '@org/shared-constants';
import { BaseComponents } from './base-components';
import { UI } from '../../ui-wrapper';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
};

export class ContactUsForm extends BaseComponents {
  private uiContext: UI;

  constructor(context: Page | FrameLocator) {
    super(context as Page);
    this.uiContext = new UI(context);
  }

  get firstNameInput() {
    return this.uiContext.inputByPlaceholder('First Name');
  }

  get lastNameInput() {
    return this.uiContext.inputByPlaceholder('Last Name');
  }

  get emailId() {
    return this.uiContext.inputByPlaceholder('Email Address');
  }

  get comments() {
    return this.uiContext.inputByPlaceholder('Comments');
  }

  get submitBtn() {
    return this.uiContext.getByRole('button', { name: 'SUBMIT' });
  }

  get resetBtn() {
    return this.uiContext.getByRole('button', { name: 'RESET' });
  }

  get contactUsFormConfirmationMsg() {
    return this.uiContext.getByRole('heading', {
      name: Messages.CONFIRM.formSubmitMsg,
    });
  }

  async submitContactUsForm(data: ContactFormData) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailId.fill(data.email);
    await this.comments.fill(data.comments);
    await this.submitBtn.click();
  }

  async resetSubmitContactUsForm(data: ContactFormData) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailId.fill(data.email);
    await this.comments.fill(data.comments);
    await this.resetBtn.click();
  }

  async verifyContactUsFormSubmission() {
    await this.contactUsFormConfirmationMsg.waitFor();
    await expect(this.contactUsFormConfirmationMsg).toBeVisible();
    await expect(this.contactUsFormConfirmationMsg).toHaveText(
      Messages.CONFIRM.formSubmitMsg
    );
  }
}