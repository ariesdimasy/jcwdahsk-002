import path from 'path';
import fs from 'fs';

// Tests for Product and Transaction classes using their public API (getters/setters)
// and verifying console logs for validation messages.

describe('module01/session06/exercise2.ts - Product & Transaction behaviors', () => {
  const targetPath = path.join(process.cwd(), 'module01', 'session06', 'exercise2.ts');

  beforeAll(() => {
    expect(fs.existsSync(targetPath)).toBe(true);
  });

  beforeEach(() => {
    jest.resetModules();
  });

  test('Should export Product and Transaction classes', () => {
    const mod = require(targetPath);
    expect(mod.Product).toBeInstanceOf(Function);
    expect(mod.Transaction).toBeInstanceOf(Function);
  });

  test('Should not set empty name; logs "name is required" and keeps previous value', () => {
    const { Product } = require(targetPath);
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const p = new Product();
    // default name is ''
    p.setName = '';
    expect(logSpy).toHaveBeenCalledWith(' name is required');
    expect(p.getName).toBe('');

    logSpy.mockRestore();
  });

  test('Should set valid name via setter and read via getter', () => {
    const { Product } = require(targetPath);
    const p = new Product();
    p.setName = 'Apple';
    expect(p.getName).toBe('Apple');
  });

  test('Should not set negative price; logs "price must be higher than 0" and keeps previous value', () => {
    const { Product } = require(targetPath);
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const p = new Product();
    // default price is 0
    p.setPrice = -10;
    expect(logSpy).toHaveBeenCalledWith(' price must be higher than 0');
    expect(p.getPrice).toBe(0);

    logSpy.mockRestore();
  });

  test('Should set positive price via setter and read via getter', () => {
    const { Product } = require(targetPath);
    const p = new Product();
    p.setPrice = 15000;
    expect(p.getPrice).toBe(15000);
  });

  test('Transaction.addToCart should store product entries with correct subtotal and accumulate total', () => {
    const { Product, Transaction } = require(targetPath);
    const apple = new Product();
    apple.setName = 'Apple';
    apple.setPrice = 2000;

    const banana = new Product();
    banana.setName = 'Banana';
    banana.setPrice = 1000;

    const trx = new Transaction();
    trx.addToCart(apple, 3); // 3 * 2000 = 6000
    trx.addToCart(banana, 5); // 5 * 1000 = 5000

    expect(trx.products.length).toBe(2);
    expect(trx.products[0].product.getName).toBe('Apple');
    expect(trx.products[0].qty).toBe(3);
    expect(trx.products[0].subtotal).toBe(6000);

    expect(trx.products[1].product.getName).toBe('Banana');
    expect(trx.products[1].qty).toBe(5);
    expect(trx.products[1].subtotal).toBe(5000);

    // total accumulated
    expect(trx.total).toBe(11000);
    if (typeof trx.showTotal === 'function') {
      expect(trx.showTotal()).toBe(11000);
    }
  });
});
