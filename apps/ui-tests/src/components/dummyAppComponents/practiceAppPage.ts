import { Page } from '@playwright/test';
import { BaseComponents } from '../demoWebComponents/base-components';
import { NavbarComponents } from './navBarComponents';

export class PracticeAppPage extends BaseComponents {
  constructor(page: Page) {
    super(page);
  }

  get listOfApps() {
    return this.ui.locator('#practice-apps>div:last-child>div');
  }

  get listOfStartPrcaticingBtn(){
    return this.page.locator('button').filter({ hasText: 'Start Practicing' });
  }

  get LoginHeader(){
     return this.ui.heading('Log in');
  }

  async navigate(navBar: NavbarComponents) {
    await navBar.openPracticeApp();
  }

  async getListOfAllApps() {
    return this.listOfApps;
  }

  async getListOfStartPracticingBtn(){
    return this.listOfStartPrcaticingBtn;
  }

  async loginHeader(){
    this.LoginHeader;
  }
}
