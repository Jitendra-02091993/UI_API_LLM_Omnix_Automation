// utils/logger.ts
export class Logger {
  static step(message: string) {
    console.log(`\n🟦 STEP: ${message}`);
  }

  static action(message: string) {
    console.log(`👉 ${message}`);
  }

  static success(message: string) {
    console.log(`✅ ${message}`);
  }

  static error(message: string) {
    console.log(`❌ ${message}`);
  }

  static info(message: string) {
    console.log(`ℹ️ ${message}`);
  }
}