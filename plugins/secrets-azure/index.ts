import type { SecretsPlugin } from '@sparkbot/secrets-plugin-interface';
import { SecretClient } from '@azure/keyvault-secrets';
import { DefaultAzureCredential } from '@azure/identity';

export class SecretsVault implements SecretsPlugin {
	client: SecretClient;

	constructor(readonly options: { vaultURL: string }) {
		const credential = new DefaultAzureCredential();
		this.client = new SecretClient(options.vaultURL, credential);
	}

	async get(key: string) {
		const secret = await this.client.getSecret(key);
		if (secret.value) {
			return secret.value;
		}

		throw new Error(`Azure Key Vault is missing value for ${secret.name}`);
	}
}
