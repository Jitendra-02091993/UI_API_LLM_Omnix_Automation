// base-components.ts
import { Page, expect } from '@playwright/test';
import { UI } from '../../ui-wrapper';
import {Logger} from '@org/shared-constants'


export class BaseComponents {
    protected readonly ui: UI;

    constructor(protected page: Page) {
        this.ui = new UI(page);
    }

    async waitForDialog(options?: {
        action?: 'accept' | 'dismiss';
        timeout?: number;
    }) {
        const { action = 'accept', timeout } = options || {};

        const dialog = await this.page.waitForEvent('dialog', { timeout });
        
        const message = dialog.message();
        if (action === 'accept') {
            await dialog.accept();
        } else {
            await dialog.dismiss();
        }

        return {
            validate: async (expectedMessage: string) => {
                expect(message).toContain(expectedMessage);
                Logger.info(`Dialog message: ${message}`);
            }
        };
    }
    async handleAlert(expectedMessage: string) {
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
                Logger.info('alert message is: ' + message);
            }
        };
    }

    async launchURL(url:string){
        await this.page.goto(url, {waitUntil: "domcontentloaded"})
    }
}