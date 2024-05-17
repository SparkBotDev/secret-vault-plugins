# Spark⚡️Bot: Secrets Plugin - Azure Key Vault

@sparkbot/secrets-azure retrieves values from an [Azure Key Vault.](https://azure.microsoft.com/en-us/products/key-vault)

## Usage

To use @sparkbot/secrets-azure in your [Spark⚡️Bot](https://github.com/SparkBotDev/SparkBot#readme) follow these steps:

1. Add the package to your project with `bun add @sparkbot/secrets-azure`
1. Update `sparkbot.config.ts` as follows.

```ts
secretsVault: {
	name: '@sparkbot/secrets-azure',
	options: { vaultURL: 'https://????.vault.azure.net/' },
},
```

> [!NOTE]
> Per Microsoft engineers, the Vault URL is not a secret.
