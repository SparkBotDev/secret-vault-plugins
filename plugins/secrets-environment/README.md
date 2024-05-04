# Spark⚡️Bot: Secrets Plugin - Environment Variable

@sparkbot/secrets-environment is the default [Spark⚡️Bot](https://github.com/SparkBotDev/SparkBot#readme) secrets vault plugin. It retrieves values from environment variables.

## Usage

@sparkbot/secrets-environment is implemented in the main code base as the default secrets vault plugin. If needed it can be re-installed and configured by following these steps:

1) Add the package to your project with `bun add @sparkbot/secrets-environment`
1) Update `sparkbot.config.ts` as follows (this plugin has no options).

```ts
secretsVault: {
    module: {
        name: '@sparkbot/secrets-environment',
    },
},
```

> [!NOTE]
> Spark⚡️Bot is agnostic about how environment variables are set.
