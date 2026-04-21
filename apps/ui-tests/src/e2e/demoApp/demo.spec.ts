import { test } from '../../fixtures/test-fixtures';
import { TEST_DATA } from '@org/shared-constants';

test.describe('Contact Us Form @sanity', () => {
  test('should submit form successfully', async ({ contactUsForm }) => {
    await contactUsForm.submitContactUsForm({
      firstName: TEST_DATA.VALID.firstName,
      lastName: TEST_DATA.VALID.lastName,
      email: TEST_DATA.VALID.email,
      comments: TEST_DATA.VALID.comments,
    });
    await contactUsForm.verifyContactUsFormSubmission();
  });

  test('should show validation error on empty submit @sanity', async ({contactUsForm}) => {
    await contactUsForm.resetSubmitContactUsForm({
      firstName: TEST_DATA.VALID.firstName,
      lastName: TEST_DATA.VALID.lastName,
      email: TEST_DATA.VALID.email,
      comments: TEST_DATA.VALID.comments,
    });
    await contactUsForm.contactUsFormConfirmationMsg.waitFor({state:'hidden'});
   });

  test('validate UI alert @sanity', async ({ loginForm }) => {
    await loginForm.login('jitu', 'kartik');
    await loginForm.handleAlertPopUp();
  });

  test('validate action page @sanity @action', async ({ actionPage }) => {
    await actionPage.dragAndDrop();
  });

  test('validate hover link @sanity @action', async ({ actionPage }) => {
    await actionPage.clickLinkUnderFirstHover();
  });

  test('submit form in frame @sanity @iframe', async ({iframePage}) => {
    await iframePage.submitContactUsFormInIframe({
      firstName: TEST_DATA.VALID.firstName,
      lastName: TEST_DATA.VALID.lastName,
      email: TEST_DATA.VALID.email,
      comments: TEST_DATA.VALID.comments,
    });
  });
});
