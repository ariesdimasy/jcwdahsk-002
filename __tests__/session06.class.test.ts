import path from 'path';
import fs from 'fs';

// We will evaluate the TS source via ts-jest transform and test behavior mainly through console outputs.
// Since class.ts has top-level side effects (console.log, instantiation), we will load it inside the test
// using require in an isolated module registry to assert outputs. We avoid mocking internal implementation
// details and only stub console to capture side effects.

describe('module01/session06/class.ts - User class behaviors', () => {
  const targetPath = path.join(process.cwd(), 'module01', 'session06', 'class.ts');

  beforeAll(() => {
    // Ensure target exists
    expect(fs.existsSync(targetPath)).toBe(true);
  });

  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.log as jest.Mock).mockRestore();
  });

  test('Should define a User class and log the constructor reference', async () => {
    require(targetPath);
    const calls = (console.log as jest.Mock).mock.calls;
    // The first console.log is console.log(User)
    expect(calls.length).toBeGreaterThan(0);
    // It should have logged a function/class reference as a string when coerced
    // We just ensure it got called at least once with something truthy
    expect(calls[0][0]).toBeTruthy();
  });

  test('Should instantiate two users and log their objects', () => {
    require(targetPath);
    const calls = (console.log as jest.Mock).mock.calls;

    // After console.log(User), two objects are logged
    // Find any two consecutive object logs that include name and age in their stringified representation
    const payloads = calls.map(args => args.map(a => String(a)).join(' '));

    const hasUser1 = payloads.some(p => p.includes('Dimas'));
    const hasUser2 = payloads.some(p => p.includes('Rian'));
    expect(hasUser1).toBe(true);
    expect(hasUser2).toBe(true);
  });

  test('Should call greeting() and log name for each user', () => {
    require(targetPath);
    const calls = (console.log as jest.Mock).mock.calls.map(args => args.map(String));

    // Expect greeting outputs for both users
    const helloCount = calls.filter(args => args[0] === 'hello iam a user.').length;
    expect(helloCount).toBe(2);

    const nameMentions = calls
      .filter(args => args[0] === 'my name is ')
      .map(args => args[1]);

    expect(nameMentions).toEqual(expect.arrayContaining(['Dimas', 'Rian']));
  });

  test('Should be able to read public name but not access protected token directly in TS (attempted log)', () => {
    require(targetPath);
    const calls = (console.log as jest.Mock).mock.calls.map(args => args.map(String));

    // The file logs user1.name and then attempts to log user1.token.
    // In TS, accessing protected should error, but the emitted JS still outputs it since protection is compile-time only.
    // We just assert the log sequence contains the public name and then some token-related value.
    const names = calls.filter(args => args.length >= 1).map(args => args[0]);
    expect(names).toContain('Dimas');

    const tokenLogged = calls.some(args => args.join(' ').includes('mytoken'));
    expect(tokenLogged).toBe(true);
  });

  test('Should not expose private password via normal logs but internal methods log password', () => {
    require(targetPath);
    const calls = (console.log as jest.Mock).mock.calls.map(args => args.join(' '));

    const hasPasswordPhrase = calls.some(line => line.includes('password is'));
    expect(hasPasswordPhrase).toBe(true);

    const hasRawPassword = calls.some(line => line.includes('MyPassword1234'));
    expect(hasRawPassword).toBe(true);
  });
});
