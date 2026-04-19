import {expect, Page} from '@playwright/test';

export class ContactUsForm {
    constructor(private page:Page){};

    get firstNameInput() {
        return this.page.getByPlaceholder('First Name');
    }

    get lastNameInput() {
        return this.page.getByPlaceholder('Last Name');
    }

    get emailId(){
        return this.page.getByPlaceholder('Email Address');
    }

    get comments(){
        return this.page.getByPlaceholder('Comments')
    }

    get submitBtn (){
        return this.page.getByRole('button', {name: 'SUBMIT'})
    }

    get resetBtn(){
        return this.page.getByRole('button', {name: 'RESET'})
    }

    get contactUsFormConfirmationMsg(){
        return this.page.getByRole('heading', {name: 'Thank You for your Message!'})
    }

    async submitContactUsForm(name:string, lastname:string, emailid:string, comments:string){
        await this.firstNameInput.fill(name);
        await this.lastNameInput.fill(lastname);
        await this.emailId.fill(emailid);
        await this.comments.fill(comments);
        await this.submitBtn.click();
    }

    async resetSubmitContactUsForm(name:string, lastname:string, emailid:string, comments:string){
        await this.firstNameInput.fill(name);
        await this.lastNameInput.fill(lastname);
        await this.emailId.fill(emailid);
        await this.comments.fill(comments);
        await this.resetBtn.click();
    }

    async verifyContactUsFormSubmission(){
        await this.contactUsFormConfirmationMsg.waitFor();
        await expect(this.contactUsFormConfirmationMsg).toBeVisible();
        await expect(this.contactUsFormConfirmationMsg).toHaveText('Thank You for your Message!');
    }
    
}