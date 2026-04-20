import { expect, Page, Locator, FrameLocator } from '@playwright/test';
import { Messages } from '@org/shared-constants';
type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
};
type Root = Page | Locator | FrameLocator;
export class ContactUsForm {
  constructor(private root: Root) {}

  get firstNameInput() {
    return this.root.getByPlaceholder('First Name');
  }

  get lastNameInput() {
    return this.root.getByPlaceholder('Last Name');
  }

  get emailId() {
    return this.root.getByPlaceholder('Email Address');
  }

  get comments() {
    return this.root.getByPlaceholder('Comments');
  }

  get submitBtn() {
    return this.root.getByRole('button', { name: 'SUBMIT' });
  }

  get resetBtn() {
    return this.root.getByRole('button', { name: 'RESET' });
  }

  get contactUsFormConfirmationMsg() {
    return this.root.getByRole('heading', {
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

  async resetSubmitContactUsForm(data: ContactFormData 
  ) {
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
      Messages.CONFIRM.formSubmitMsg,
    );
  }
}
