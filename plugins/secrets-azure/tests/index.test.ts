/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { describe, expect, it, spyOn } from 'bun:test';
import type { KeyVaultSecret } from '@azure/keyvault-secrets';
import { SecretsVault } from '../index.ts';

const testVault = new SecretsVault({ vaultURL: 'nope' }); // eslint-disable-line @typescript-eslint/naming-convention
const spy = spyOn(testVault.client, 'getSecret').mockImplementation(
	async (key: string) => {
		if (key === 'testVar') {
			return {
				properties: {},
				value: 'test',
				name: 'testVar',
			} as KeyVaultSecret;
		}

		return {
			properties: {},
			name: 'asdfasdgge',
		} as KeyVaultSecret;
	},
);

describe('secrets-environment plugin', () => {
	it('is a class named SecretsVault', () => {
		expect(testVault).toBeInstanceOf(SecretsVault);
	});
	it('gets a key from an environment variable', async () => {
		await testVault.get('testVar');
		expect(spy).toHaveBeenCalled();
	});
	it('throws an error if key does not exist', () => {
		expect(async () => {
			await testVault.get('asdfasdgge');
		}).toThrowError();
	});
});
