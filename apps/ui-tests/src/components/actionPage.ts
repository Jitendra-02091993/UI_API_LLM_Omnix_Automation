import { Page } from '@playwright/test';
import { BaseComponents } from './base-components';

export class ActionPage extends BaseComponents {
  constructor(page: Page) {
    super(page);
  }

  get draggableEle() {
    return this.page.locator("//div[@id='draggable']");
  }

  get droppableEle() {
    return this.page.locator("//div[@id='droppable']");
  }

  get firstHoverEle() {
    return this.page
      .locator('#div-hover')
      .getByRole('button', { name: 'Hover Over Me First!' });
  }

  get firstHoverLink() {
    return this.page.getByRole('link', { name: 'Link 1' });
  }

  get secondHoverEle() {
    return this.page
      .locator('#div-hover')
      .getByRole('button', { name: 'Hover Over Me Second!' });
  }

  get secondHoverLink() {
    return this.page.getByRole('link', { name: 'Link 1' });
  }

  get thirdHoverEle() {
    return this.page
      .locator('#div-hover')
      .getByRole('button', { name: 'Hover Over Me Third!' });
  }

  get thirdHoverLink() {
    return this.page.getByRole('link', { name: 'Link 1', level: 1 });
  }

  async dragAndDropEle() {
    await this.draggableEle.waitFor({ state: 'visible' });
    await this.draggableEle.waitFor({ state: 'visible' });
    await this.draggableEle.dragTo(this.droppableEle);
  }

  async clickLinkUnderFirstHover() {
    await this.firstHoverEle.hover();
    const alert = await this.handleAlert('Well done you clicked on the link!')
    await this.firstHoverLink.click();
    await alert.validate();
  }
}
