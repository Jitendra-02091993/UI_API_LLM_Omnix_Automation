import { test } from '../../fixtures/test-fixtures';
import { Logger, TEST_DATA } from '@org/shared-constants';
import { registerPages } from '../../factories/page-factory';

test.describe('Validate Practice App', () => {
  test('complete the registration @register', async ({
    practiceAppPage,
    dialogComponents,
    testContext,
    user,
    }) => {
    const appList = await practiceAppPage.getListOfAllApps();
    const count = await appList.count();

    const buttons = practiceAppPage.listOfStartPracticingBtn;

    for (let i = 0; i < count; i++) {
      const details = await appList.nth(i).innerText();

      if (details.includes('Client Dashboard')) {
        await buttons.nth(i).click();

        await dialogComponents.fillDialogIfVisible(TEST_DATA.DIALOG);
        break;
      }
    }

     const [newPage] = await Promise.all([
          practiceAppPage.getContext().waitForEvent('page'),
          dialogComponents.submitDialog(),
        ]);
      
        registerPages(newPage, testContext);
        await newPage.waitForLoadState();
        await testContext.pages.register.clickRegisterLink();
        await testContext.pages.register.completeRegistration();
        await testContext.pages.login.login(user.emailId, user.password);
  });

  test.afterEach(async ({ testContext }) => {
  Logger.info('Closing the Practice App page');
  Logger.info('Test execution completed');

  const user = testContext.get('user');

  Logger.info('username is :: ' + user.emailId);
  Logger.info('password is :: ' + user.password);
});
})