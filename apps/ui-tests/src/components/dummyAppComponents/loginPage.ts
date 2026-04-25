import {Page, expect } from '@playwright/test';
import { BaseComponents } from '../demoWebComponents/base-components';
import { TestContext } from '@org/orchestration-lib';

export class LoginPage extends BaseComponents { 
    constructor (page : Page, ctx: TestContext) {
        super(page, ctx);
    }

    get emailInputTextBox() {
        return this.ui.textBox('email@example.com');
    }

    get passwordInputTextBox() {
        return this.ui.textBox('enter your passsword')
    }

    get loginBtn(){
        return this.ui.button('Login');
    }

    async login(email: string, password: string) {
        expect(this.loginBtn).toBeVisible();
        await this.loginBtn.click(); 
        await this.emailInputTextBox.fill(email);
        await this.passwordInputTextBox.fill(password);
        await this.loginBtn.click();
        await this.page.waitForTimeout(5000);
    }

    
}