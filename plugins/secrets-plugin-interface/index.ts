export abstract class SecretsPlugin {
	constructor(readonly options: Record<string, unknown>) {}
	abstract get(key: string): Promise<string>;
}
