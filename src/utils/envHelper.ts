// path: src/utils/envHelper.ts
import { BASE_URLS } from '../base-urls';

/**
 * Reads and validates environment-driven runtime settings.
 */
export class EnvHelper {
  /**
   * Returns the configured base URL for tests.
   */
  public getBaseUrl(): string {
    return process.env.BASE_URL ?? BASE_URLS.playwright;
  }

  /**
   * Returns an environment variable or throws if missing.
   */
  public requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
      throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
  }
}

const envHelper = new EnvHelper();

export const getBaseUrl = (): string => envHelper.getBaseUrl();
export const requireEnv = (name: string): string => envHelper.requireEnv(name);
