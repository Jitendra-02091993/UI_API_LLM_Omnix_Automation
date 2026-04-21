// actionPage.ts
import { Page } from '@playwright/test';
import { BaseComponents } from './base-components';
import { Messages } from '@org/shared-constants';

export class ActionPage extends BaseComponents {
  constructor(page: Page) {
    super(page);
  }

  get draggable() {
    return this.ui.locator('#draggable');
  }

  get droppable() {
    return this.ui.locator('#droppable');
  }

  get firstHoverBtn() {
    return this.ui.locator('#div-hover').getByRole('button', { name: 'Hover Over Me First!' });
  }

  get firstHoverLink() {
    return this.firstHoverBtn.locator('..').getByRole('link', { name: 'Link 1' });
  }

  get secondHoverBtn() {
    return this.ui.locator('#div-hover').getByRole('button', { name: 'Hover Over Me Second!' });
  }

  get secondHoverLink() {
    return this.secondHoverBtn.locator('..').getByRole('link', { name: 'Link 1' });
  }

  get thirdHoverBtn() {
    return this.ui
      .locator('#div-hover')
      .getByRole('button', { name: 'Hover Over Me Third!' });
  }

  get thirdHoverLink() {
    return this.thirdHoverBtn.locator('..').getByRole('link', { name: 'Link 1', level: 1 });
  }

  async dragAndDrop() {
    await this.draggable.waitFor({ state: 'visible' });
    await this.draggable.dragTo(this.droppable);
  }

  async clickLinkUnderFirstHover() {
    await this.firstHoverBtn.hover();
    const alert = await this.handleAlert(Messages.ALERT.message2);
    await this.firstHoverLink.click();
    await alert.validate();
  }
}