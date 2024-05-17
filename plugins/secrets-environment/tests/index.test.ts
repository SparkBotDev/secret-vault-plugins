import { describe, expect, it } from 'bun:test';
import { SecretsVault } from '../index.ts';

const testVault = new SecretsVault({});
describe('secrets-environment plugin', () => {
	it('is a class named SecretsVault', () => {
		expect(testVault).toBeInstanceOf(SecretsVault);
	});
	it('gets a key from an environment variable', () => {
		Bun.env['testVar'] = 'test';
		expect(testVault.get('testVar')).toBeDefined();
	});
	it('throws an error if key does not exist', () => {
		expect(async () => {
			await testVault.get('asdfasdgge');
		}).toThrowError();
	});
});
