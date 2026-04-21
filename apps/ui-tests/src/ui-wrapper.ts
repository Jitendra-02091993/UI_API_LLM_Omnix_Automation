// ui/ui-wrapper.ts
import { Page, Locator, FrameLocator } from '@playwright/test';

type Root = Page | Locator | FrameLocator;

export class UI {
  constructor(private root: Root) {}

  inputByPlaceholder(name: string) {
    return this.root.getByPlaceholder(name);
  } 

  button(name: string) {
    return this.root.getByRole('button', { name });
  }

  link(name: string) {
    return this.root.getByRole('link', { name });
  }

  heading(name: string) {
    return this.root.getByRole('heading', { name });
  }

  textBox(name:string) {
    return this.root.getByRole('textbox', {name});
  }

  locator(ele:string){
    return this.root.locator(ele)
  }

  getByRole(role: string, options?: any) {
    return this.root.getByRole(role as any, options);
  }
}