import { test as base } from '@playwright/test';
import { ContactUsForm } from '../components/contactus-form';
import { HomePage } from '../components/homePage';
import { Loginform } from '../components/login-form';
import { ActionPage } from '../components/actionPage';
import { IframePage } from '../components/iframePage';

type Fixtures = {
  homePage: HomePage;
  contactUsForm: ContactUsForm;
  loginForm: Loginform;
  actionPage: ActionPage;
  iframePage: IframePage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const home = new HomePage(page);
    await home.navigate();
    await use(home);
  },

  contactUsForm: async ({ homePage }, use) => {
    const newPage = await homePage.openContactUs();
    const form = new ContactUsForm(newPage);
    await use(form);
  },

  loginForm: async ({ homePage }, use) => {
    const newPage = await homePage.openLoginForm();
    const form = new Loginform(newPage);
    await use(form);
  },
  actionPage: async ({homePage}, use) => {
    const newPage = await homePage.openActionPage();
    const form = new ActionPage(newPage);
    await use(form);
  },

  iframePage : async ({homePage}, use) => {
    const newPage = await homePage.openIframePage();
    const form = new IframePage(newPage);
    await use(form);
  }
});

export { expect } from '@playwright/test';