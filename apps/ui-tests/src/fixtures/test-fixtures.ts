import { test as base } from '@playwright/test';
import { ContactUsForm } from '../components/demoWebComponents/contactus-form';
import { HomePage } from '../components/demoWebComponents/homePage';
import { Loginform } from '../components/demoWebComponents/login-form';
import { ActionPage } from '../components/demoWebComponents/actionPage';
import { IframePage } from '../components/demoWebComponents/iframePage';
import { NavbarComponents } from '../components/dummyAppComponents/navBarComponents';
import { PracticeAppPage } from '../components/dummyAppComponents/practiceAppPage';
import { DialogComponents } from '../components/dummyAppComponents/dialogComponents';
import { generateUser } from '@org/shared-constants';
import { TestContext } from '@org/orchestration-lib';
import { RegisterPage } from '../components/dummyAppComponents/registerPage';

type Fixtures = {
  homePage: HomePage;
  contactUsForm: ContactUsForm;
  loginForm: Loginform;
  actionPage: ActionPage;
  iframePage: IframePage;
  navBarComponents: NavbarComponents;
  practiceAppPage: PracticeAppPage;
  dialogComponents: DialogComponents;
  user: ReturnType<typeof generateUser>;
  registerPage: RegisterPage;
  testContext: TestContext;
};

export const test = base.extend<Fixtures>({
  navBarComponents: async ({ page, testContext }, use) => {
    const navBar = new NavbarComponents(page, testContext);
    await navBar.navigate();
    await use(navBar);
  },

  testContext: async ({}, use) => {
    const ctx = new TestContext();
    await use(ctx);
  },

  registerPage: async ({ page, testContext }, use) => {
    const registerPage = new RegisterPage(page, testContext);
    await use(registerPage);
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

  loginForm: async ({ homePage, testContext }, use) => {
    const newPage = await homePage.openLoginForm();
    const form = new Loginform(newPage, testContext);
    await use(form);
  },
  actionPage: async ({ homePage }, use) => {
    const newPage = await homePage.openActionPage();
    const form = new ActionPage(newPage);
    await use(form);
  },

  iframePage: async ({ homePage }, use) => {
    const newPage = await homePage.openIframePage();
    const form = new IframePage(newPage);
    await use(form);
  },

  practiceAppPage: async ({ page, navBarComponents, testContext }, use) => {
    const practicePage = new PracticeAppPage(page, testContext);
    await practicePage.navigate(navBarComponents);
    await use(practicePage);
  },

  dialogComponents: async ({ page }, use) => {
    const dialog = new DialogComponents(page);
    await use(dialog);
  },

  user: async ({ testContext }, use) => {
    const user = generateUser();
    testContext.set('user', user);
    await use(user);
  },

});

export { expect } from '@playwright/test';
