import { test } from '../fixtures/test-fixtures';

test.describe('Contact Us Form @sanity', () => {
  test('should submit form successfully', async ({ contactUsForm }) => {
    await contactUsForm.submitContactUsForm({
      firstName: 'jitu',
      lastName: 'dharam',
      email: 'dh@gmail.com',
      comments: 'hello contact form is filled',
    });
    await contactUsForm.verifyContactUsFormSubmission();
  });

  test('should show validation error on empty submit @sanity', async ({contactUsForm}) => {
    await contactUsForm.resetSubmitContactUsForm(
      {firstName: 'jitu',
      lastName: 'dharam',
      email: 'dharam@gmail.com',
      comments: 'hello contact form is filled'}
    );
    await contactUsForm.contactUsFormConfirmationMsg.waitFor({state:'hidden'});
   });

  test('validate UI alert @sanity', async ({ loginForm }) => {
    await loginForm.login('jitu', 'kartik');
    await loginForm.handleAlertPopUp();
  });

  test('validate action page @sanity', async ({ actionPage }) => {
    await actionPage.dragAndDropEle();
  });

  test('validate hover link @sanity', async ({ actionPage }) => {
    await actionPage.clickLinkUnderFirstHover();
  });

  test('submit form in frame @test', async ({iframePage}) => {
    await iframePage.submitContactUsFormInIframe({
      firstName: 'jitu',
      lastName: 'dharam',
      email: 'dh@gmail.com',
      comments: 'hello contact form is filled',
    })
  })
});
