
export class TestContext {
  private store = new Map<string, any>();

  // grouped data
  public data: Record<string, any> = {};

  // page registry
  public pages: Record<string, any> = {};

  set<T>(key: string, value: T): void {
    this.store.set(key, value);
  }

  get<T>(key: string): T {
    if (!this.store.has(key)) {
      throw new Error(`Key "${key}" not found`);
    }
    return this.store.get(key);
  }

  clear() {
    this.store.clear();
    this.pages = {};
    this.data = {};
  }
}