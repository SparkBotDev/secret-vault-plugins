import type { SecretsPlugin } from '@sparkbot/secrets-plugin-interface';

export class SecretsVault implements SecretsPlugin {
	constructor(readonly options: Record<string, unknown>) {}
	async get(key: string) {
		if (Bun.env[key]) {
			return Bun.env[key]!;
		}

		throw new Error(`Key: ${key} does not exist as an environment variable.`);
	}
}
