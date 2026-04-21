import { test } from '../../fixtures/test-fixtures';
import { Logger } from '@org/shared-constants';
import { TEST_DATA } from '@org/shared-constants';

test.describe('Validate Practice App', () => {
  test('validate numbers of test apps @demo', async ({practiceAppPage, dialogComponents}) => {
    const appList = await practiceAppPage.getListOfAllApps();
    const count = await appList.count();
    Logger.info('ele list is :: ' + count);

    let counter = 0;
    const buttons = practiceAppPage.listOfStartPrcaticingBtn;
    while (counter < count) {
      const details = await appList.nth(counter).innerText();
      if (details.includes('Client Dashboard')) {
        await buttons.nth(counter).click();
        await dialogComponents.fillDialogIfVisible(TEST_DATA.DIALOG)
        Logger.info('Clicked on Start Practicing button for Client Dashboard app' + appList.nth(counter).innerText()); 
        break;
      }
      counter ++;
    }
    await practiceAppPage.LoginHeader.waitFor({state: 'visible'})
  });
});
