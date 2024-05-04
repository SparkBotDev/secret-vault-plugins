import { describe, it, expect } from 'bun:test';
import SecretsPlugin from '../index.js';

describe('Secrets vault environment plugin', () => {
	it('get(key) method accepts a string parameter and returns a string', async () => {
		Bun.env['testVariable'] = 'valid';
		const testObject = new SecretsPlugin({});
		expect(await testObject.get('testVariable')).toEqual('valid');
	});
});
