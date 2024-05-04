# Spark⚡️Bot Secrets Vault Plugins

![Spark⚡️Bot Banner](https://github.com/SparkBotDev/.github/raw/main/assets/images/readme-banner.png)

This repository contains both official and hosted plugins to integrate various secrets management systems into [Spark⚡️Bot](https://github.com/SparkBotDev/SparkBot).

## Official Plugins

- [@sparkbot/secrets-environment](https://github.com/SparkBotDev/secret-vault-plugins/tree/main/plugins/secrets-environment#readme) - Default secrets vault plugin, obtains secrets from environment variables.

## Plugins made by others

We would love to have plugins for other systems created. You can either add it to this repository or create your own package, either way, please open a PR here to include it.

## Using a plugin

The readme for each plugin will have detailed instructions on its use.  In general you will need to add the plugin using `bun add` and then edit `sparkbot.config.ts` with the package name and any required options.

## Creating a plugin

Creating a plugin requires implementing the [SecretsPlugin](https://github.com/SparkBotDev/secret-vault-plugins/tree/main/plugins/secrets-plugin-interface#readme) interface.
