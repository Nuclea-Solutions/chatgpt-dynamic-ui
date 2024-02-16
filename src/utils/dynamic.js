
const { parseCallbackConfigArg } = require('@langchain/core/callbacks/manager');
const { StructuredTool, Tool } = require('@langchain/core/tools');

/**
 * A tool that can be created dynamically from a function, name, and description.
 */
class DynamicTool extends Tool {
	static lc_name() {
		return 'DynamicTool';
	}
	constructor(fields) {
		super(fields);
		Object.defineProperty(this, 'name', {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, 'description', {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, 'func', {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.name = fields.name;
		this.description = fields.description;
		this.func = fields.func;
		this.returnDirect = fields.returnDirect ? fields.returnDirect : this.returnDirect;
	}
	async call(arg, configArg) {
		const config = parseCallbackConfigArg(configArg);
		if (config.runName === undefined) {
			config.runName = this.name;
		}
		return super.call(arg, config);
	}
	/** @ignore */
	async _call(input, runManager) {
		return this.func(input, runManager);
	}
}
/**
 * A tool that can be created dynamically from a function, name, and
 * description, designed to work with structured data. It extends the
 * StructuredTool class and overrides the _call method to execute the
 * provided function when the tool is called.
 */
class DynamicStructuredTool extends StructuredTool {
	static lc_name() {
		return 'DynamicStructuredTool';
	}
	constructor(fields) {
		super(fields);
		Object.defineProperty(this, 'name', {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, 'description', {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, 'func', {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		Object.defineProperty(this, 'schema', {
			enumerable: true,
			configurable: true,
			writable: true,
			value: void 0
		});
		this.name = fields.name;
		this.description = fields.description;
		this.func = fields.func;
		this.returnDirect = fields.returnDirect ? fields.returnDirect : this.returnDirect;
		this.schema = fields.schema;
	}
	async call(
		arg,
		configArg,
		/** @deprecated */
		tags
	) {
		const config = parseCallbackConfigArg(configArg);
		if (config.runName === undefined) {
			config.runName = this.name;
		}
		return super.call(arg, config, tags);
	}
	_call(arg, runManager) {
		return this.func(arg, runManager);
	}
}

module.exports = { DynamicTool, DynamicStructuredTool };