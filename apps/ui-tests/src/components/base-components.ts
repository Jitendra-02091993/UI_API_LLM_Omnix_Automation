import {Page,expect} from '@playwright/test';

export class BaseComponents {
    constructor(protected page: Page) {}
   
    async handleAlert(expectedMessage:string){
        const dialogPromise = new Promise<string>((resolve) => {
            this.page.once('dialog', async (dialog) => {
                const msg = dialog.message();
                await dialog.accept();
                resolve(msg);
            });
        });
        return {
            validate: async () => {
                const message = await dialogPromise;
                expect(message).toContain(expectedMessage);
                console.log('alert message is: '+message)
            }
        }
    }

}