import { test as base } from '@playwright/test';
import { ContactUsForm } from '../components/demoWebComponents/contactus-form';
import { HomePage } from '../components/demoWebComponents/homePage';
import { Loginform } from '../components/demoWebComponents/login-form';
import { ActionPage } from '../components/demoWebComponents/actionPage';
import { IframePage } from '../components/demoWebComponents/iframePage';
import {NavbarComponents} from '../components/dummyAppComponents/navBarComponents'
import { PracticeAppPage } from '../components/dummyAppComponents/practiceAppPage';
import { DialogComponents } from '../components/dummyAppComponents/dialogComponents';
import { TEST_DATA } from '@org/shared-constants';

type Fixtures = {
  homePage: HomePage;
  contactUsForm: ContactUsForm;
  loginForm: Loginform;
  actionPage: ActionPage;
  iframePage: IframePage;
  navBarComponents : NavbarComponents;
  practiceAppPage: PracticeAppPage
  dialogComponents: DialogComponents;
};

export const test = base.extend<Fixtures>({
  navBarComponents: async ({page}, use) => {
    const navBar = new NavbarComponents(page);
    await navBar.navigate();
    await use(navBar);
  },

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
  },

  practiceAppPage: async ({ page, navBarComponents }, use) => {
  const practicePage = new PracticeAppPage(page);
  await practicePage.navigate(navBarComponents);
  await use(practicePage);
},
  dialogComponents: async ({page}, use) => {
    const dialog = new DialogComponents(page)
    await use(dialog)
  }
});

export { expect } from '@playwright/test';