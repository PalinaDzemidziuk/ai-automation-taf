// path: src/fixtures/testData.ts

/** Valid credentials for the practice test login page. */
export const validUser = {
  username: 'student',
  password: 'Password123',
} as const;

/** Invalid credentials for negative login tests. */
export const invalidUser = {
  username: 'incorrectUser',
  password: 'incorrectPassword',
} as const;
